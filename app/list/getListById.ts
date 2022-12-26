import { z } from 'zod';
import { procedure } from '../../server/trpc';
import { prisma } from '../../utils/prisma';

export const getListById = procedure
  .input(z.number())
  .query(({ input: id }) =>
    prisma.list.findUnique({ where: { id }, include: { items: true } })
  );
