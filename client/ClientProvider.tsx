'use client';

import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { useState } from 'react';
import SuperJSON from 'superjson';
import { AppRouter } from '../server/routers/appRouter';
import { getBaseUrl } from '../utils/trpc';
import createEmotionCache from './createEmotionCache';
import theme from './theme';

export const trpc = createTRPCReact<AppRouter>({
  unstable_overrides: {
    useMutation: {
      async onSuccess(opts) {
        await opts.originalFn();
        await opts.queryClient.invalidateQueries();
      }
    }
  }
});

const clientSideEmotionCache = createEmotionCache();

export function ClientProvider(props: {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
}) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: () => true
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`
        })
      ],
      transformer: SuperJSON
    })
  );

  const { children, emotionCache = clientSideEmotionCache } = props;

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </CacheProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
