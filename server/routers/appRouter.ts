import { getListById } from '../../app/list/[id]/getListById';
import { router } from '../trpc';
import { getAllList } from './../../app/list/getAllList';
import { setItemDone } from './../../app/list/[id]/setItemDone';
import hello from './hello';

export const appRouter = router({
  hello,
  getListById,
  getAllList,
  setItemDone
});

export type AppRouter = typeof appRouter;
