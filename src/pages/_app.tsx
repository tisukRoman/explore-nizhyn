import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { AuthProvider } from '../context/auth';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AuthProvider>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </AuthProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
