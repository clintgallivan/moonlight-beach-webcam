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

  return !isPlaying ? (
    <Button className={styles.card} onClick={() => setIsPlaying(true)}>
      <BsPlayBtn size={70} className={styles.playButtonIcon} />
    </Button>
  ) : (
    <>
      {!isLoaded ? (
        <>
          <Spinner animation="border" style={{ marginTop: 50 }} />
          <h2>This could take up to 30 seconds!</h2>
        </>
      ) : (
        <></>
      )}

      <iframe
        width={560}
        height={315}
        src="https://enigmatic-hollows-62142.herokuapp.com"
        title="YouTube video player"
        frameBorder="0"
        onLoad={() => console.log(setIsLoaded(true))}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* <Player>
        <source src="https://enigmatic-hollows-62142.herokuapp.com" />
      </Player> */}
    </>
  );
}

export default VideoStream;
