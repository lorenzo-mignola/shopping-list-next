import { router } from '../trpc';
import hello from './hello';

export const appRouter = router({
  hello: hello
});

export type AppRouter = typeof appRouter;
