import { setItemDone } from '../../app/list/[id]/(item)/setItemDone';
import { getListById } from '../../app/list/[id]/getListById';
import { router } from '../trpc';
import { addList } from './../../app/list/addList';
import { getAllList } from './../../app/list/getAllList';
import { addItemInList } from './../../app/list/[id]/(item)/addItemInList';
import { searchItem } from './../../app/list/[id]/(item)/searchItem';
import hello from './hello';

export const appRouter = router({
  hello,
  getListById,
  getAllList,
  setItemDone,
  addList,
  searchItem,
  addItemInList
});

export type AppRouter = typeof appRouter;
