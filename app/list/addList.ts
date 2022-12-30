import { z } from 'zod';
import { procedure } from '../../server/trpc';
import { prisma } from '../../utils/prisma';

export const addList = procedure
  .input(z.object({ name: z.string() }))
  .mutation(({ input }) =>
    prisma.list.create({
      data: {
        name: input.name,
        createdAt: new Date()
      }
    })
  );
