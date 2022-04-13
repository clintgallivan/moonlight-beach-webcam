import React, { useState } from 'react';
import GoogleAd from '../GoogleAd/GoogleAd';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { BsPlayBtn } from 'react-icons/bs';
import styles from './VideoStream.module.scss';
import { Button } from 'react-bootstrap';

function VideoStream() {
  const [isPlaying, setIsPlaying] = useState(false);

  return !isPlaying ? (
    <div className={styles.buttonContainer}>
      <Button onClick={() => setIsPlaying(true)}>
        <BsPlayBtn size={70} className={styles.playButtonIcon} />
      </Button>
    </div>
  ) : (
    <iframe
      width="560"
      height="315"
      // src="https://www.youtube.com/embed/vF9QRJwJXJk"
      // src="http://127.0.0.1:5000/"
      // src="rtsp://username:password@174.65.33.32:8554/profile0"
      src="https://enigmatic-hollows-62142.herokuapp.com"
      title="YouTube video player"
      frameBorder="0"
      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );

  // return (
  //   <iframe
  //     width="560"
  //     height="315"
  //     // src="https://www.youtube.com/embed/vF9QRJwJXJk"
  //     src="http://127.0.0.1:5000/"
  //     title="YouTube video player"
  //     frameborder="0"
  //     // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //     allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //     allowfullscreen
  //   ></iframe>
  // );
}

export default VideoStream;
