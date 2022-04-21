import React, { useState } from 'react';
import GoogleAd from '../GoogleAd/GoogleAd';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { BsPlayBtn } from 'react-icons/bs';
import styles from './VideoStream.module.scss';
import { Button } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import useWindowSize from '../../../hooks/useWindowSize';
// import Player from 'video-react/lib/components/Player';
function VideoStream() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const size = useWindowSize();
  console.log(size);

  const removeSpinner = () => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  };
  return !isPlaying ? (
    <Button className={styles.card} onClick={() => setIsPlaying(true)}>
      <BsPlayBtn size={70} className={styles.playButtonIcon} />
    </Button>
  ) : (
    <>
      {!isLoaded ? (
        <>
          <Spinner animation="border" style={{ marginTop: 50 }} />
          {removeSpinner()}
        </>
      ) : (
        <></>
      )}
      <iframe
        className={[styles.frame]}
        style={{ width: 442, height: 200 }}
        // width={700}
        // height={300}
        src="https://enigmatic-hollows-62142.herokuapp.com/video"
        // src="http://127.0.0.1:5000/video"
        title="Live Stream"
        frameBorder="0"
        // onLoad={() => console.log('loaded')}
        // allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}

export default VideoStream;
