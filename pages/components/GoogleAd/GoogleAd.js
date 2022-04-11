import { useEffect } from 'react';

function GoogleAd() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
      data-ad-slot="7181773959"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

export default GoogleAd;
