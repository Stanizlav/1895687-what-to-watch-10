import { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  isPlaying: boolean;
  muted?: boolean;
  loop?: boolean;
  reset?: boolean;
};

function VideoPlayer({src, poster, isPlaying, muted = false, loop = false, reset = false}: VideoPlayerProps):JSX.Element{

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(()=>{
    let isMounted = true;

    if(!videoRef.current){
      return;
    }

    if (isMounted && isPlaying){
      videoRef.current.play();
      return;
    }

    if (isMounted && !isPlaying && reset){
      videoRef.current.load();
      return;
    }

    videoRef.current.pause();

    return ()=>{
      isMounted = false;
    };
  },[isPlaying, reset]);

  return(
    <video className="player__video" src={src} poster={poster} muted={muted} loop={loop} ref={videoRef} preload='none'>
      Your browser can not play the video
    </video>
  );
}

export default VideoPlayer;
