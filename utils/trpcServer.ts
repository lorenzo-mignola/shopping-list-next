import { appRouter } from '../server/routers/appRouter';

export const trpcServer = appRouter.createCaller({});
