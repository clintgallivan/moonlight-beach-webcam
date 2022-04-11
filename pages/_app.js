import '../styles/globals.css';
// import Script from 'next/script';

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Script
//         id="Adsense-id"
//         data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
//         async
//         strategy="afterInteractive"
//         onError={(e) => {
//           console.error('Script failed to load', e);
//         }}
//         src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
//       />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;

import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        id="Adsense-id"
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
        async
        strategy="afterInteractive"
        onError={(e) => {
          console.error('Script failed to load', e);
        }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
