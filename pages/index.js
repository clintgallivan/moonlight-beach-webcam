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
        <link rel="icon" href="/volleyball_48px.ico" />
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
