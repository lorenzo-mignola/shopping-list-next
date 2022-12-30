import { z } from 'zod';
import { procedure } from '../../../../server/trpc';
import { prisma } from '../../../../utils/prisma';

export const setItemDone = procedure
  .input(z.number())
  .mutation(({ input: id }) =>
    prisma.itemInList.update({
      where: {
        id
      },
      data: {
        done: true
      }
    })
  );
