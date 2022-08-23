import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from '../context/session';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
