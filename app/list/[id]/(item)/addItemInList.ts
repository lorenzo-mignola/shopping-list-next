import { z } from 'zod';
import { procedure } from '../../../../server/trpc';
import { prisma } from '../../../../utils/prisma';

const createNewItem = (name: string) => prisma.item.create({ data: { name } });

const addItem = (itemId: number, listId: number) =>
  prisma.itemInList.create({ data: { listId, itemId } });

export const addItemInList = procedure
  .input(
    z.object({
      id: z.number().or(z.null()),
      name: z.string(),
      listId: z.number()
    })
  )
  .mutation(async ({ input: item }) => {
    let { id } = item;
    if (id === null) {
      const newItem = await createNewItem(item.name);
      id = newItem.id;
    }
    await addItem(id, item.listId);
  });
