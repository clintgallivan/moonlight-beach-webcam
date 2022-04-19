import React from 'react';
import styles from '../../../styles/Home.module.css';
import GoogleAd from '../GoogleAd/GoogleAd';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import VideoStream from '../VideoStream/VideoStream';

function MainBody() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Moonlight Beach Volleyball Webcam</h1>
      <div style={{ width: 250 }}>
        <GoogleAd />
      </div>

      {/* <p className={styles.description}>We will be live soon! Stay tuned!</p> */}

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

      <VideoStream />
    </main>
  );
}

export default MainBody;
