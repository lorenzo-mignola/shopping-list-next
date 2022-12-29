import { procedure } from '../../server/trpc';
import { prisma } from '../../utils/prisma';

export const getAllList = procedure.query(() => prisma.list.findMany());
