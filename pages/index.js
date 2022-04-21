import Head from 'next/head';
import MainBody from './components/MainBody';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moonlight Beach Volleyball Webcam</title>
        <meta name="description" content="Moonlight Beach Volleyball Webcam" />
        <meta
          name="google-site-verification"
          content="iXkJSIEv6HiDbE8tU-qjtMlIA_eRFYpMJ13yZpVoEVI"
        />
        <link rel="icon" href="/volleyball_48px.ico" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9212179920162307"
          crossorigin="anonymous"
        ></script>
      </Head>

      <MainBody />

      <footer className={styles.footer}>
        <a
          href="https://instagram.com/best.of.encinitas?igshid=YmMyMTA2M2Y=
          https://instagram.com/best.of.encinitas?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerCard}
        >
          Powered by {/* <span className={styles.logo}> */}
          <Image
            src="/BestOfEncinitasLogo.png"
            alt="BestOfEncinitas"
            width="80"
            height="60"
          />
        </a>
      </footer>
    </div>
  );
}
