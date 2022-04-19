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

      {/* <ReactPlayer
        style={{ backgroundColor: 'grey' }}
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        // url="http://127.0.0.1:5000/"
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
            },
          },
        }}
      /> */}
      <VideoStream />
      {/* <iframe
        width="560"
        height="315"
        // src="https://www.youtube.com/embed/vF9QRJwJXJk"
        src="http://127.0.0.1:5000/"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
    </main>
  );
}

export default MainBody;
