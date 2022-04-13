import React, { useState } from 'react';
import GoogleAd from '../GoogleAd/GoogleAd';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { BsPlayBtn } from 'react-icons/bs';
import styles from './VideoStream.module.scss';
import { Button } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import useWindowSize from '../../../hooks/useWindowSize';

function VideoStream() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const size = useWindowSize();

  return !isPlaying ? (
    <div
      className={styles.buttonContainer}
      style={{
        width: size.width / 1.5,
        height: ((size.width / 1.5) * 2) / 4,
      }}
    >
      <Button onClick={() => setIsPlaying(true)}>
        <BsPlayBtn size={70} className={styles.playButtonIcon} />
      </Button>
    </div>
  ) : (
    <>
      {!isLoaded ? (
        <>
          <Spinner animation="border" style={{ marginTop: 50 }} />
          <h2>Bare with us please :) We are a small business</h2>
        </>
      ) : (
        <></>
      )}
      <iframe
        width={size.width / 1.5}
        height={((size.width / 1.5) * 4) / 3}
        src="https://enigmatic-hollows-62142.herokuapp.com"
        title="YouTube video player"
        frameBorder="0"
        onLoad={() => console.log(setIsLoaded(true))}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}

export default VideoStream;
