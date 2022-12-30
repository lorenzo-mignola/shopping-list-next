import { z } from 'zod';
import { procedure } from '../../../../server/trpc';
import { prisma } from '../../../../utils/prisma';

export const searchItem = procedure
  .input(z.string())
  .query(({ input: searchTerm }) =>
    prisma.item.findMany({
      where: {
        name: {
          contains: searchTerm
        }
      },
      take: 10
    })
  );
