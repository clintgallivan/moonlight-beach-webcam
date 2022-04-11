import styles from '../../../styles/Home.module.css';
import GoogleAd from '../GoogleAd/GoogleAd';
import Image from 'next/image';

function MainBody() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Moonlight Beach Volleyball Webcam</h1>
      {/* <GoogleAd /> */}

      <p className={styles.description}>We will be live soon! Stay tuned!</p>

      <div className={styles.grid}>
        <a
          href="https://instagram.com/best.of.encinitas?igshid=YmMyMTA2M2Y=
https://instagram.com/best.of.encinitas?igshid=YmMyMTA2M2Y="
          className={styles.card}
        >
          <p>Want to know what else is happening in Encinitas? &rarr;</p>
          <Image
            src="/BestOfEncinitasLogo.png"
            alt="BestOfEncinitas"
            width="100"
            height="75"
          />
        </a>

        {/* <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a> */}

        {/* <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a> */}
      </div>
    </main>
  );
}

export default MainBody;
