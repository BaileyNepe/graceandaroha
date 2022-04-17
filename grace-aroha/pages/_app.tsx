import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '@/styles/Contact.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return <Component {...pageProps} />;
};

export default MyApp;
