import { getListById } from '../../app/list/getListById';
import { router } from '../trpc';
import hello from './hello';

export const appRouter = router({
  hello: hello,
  getListById: getListById
});

export type AppRouter = typeof appRouter;
