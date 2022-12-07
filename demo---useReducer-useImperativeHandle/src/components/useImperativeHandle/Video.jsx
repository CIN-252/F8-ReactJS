import React, { forwardRef, useImperativeHandle, useRef } from "react";
import video1 from "../../videos/video-1.mp4";

function Video(props, ref) {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));

  return <video src={video1} style={{ width: "40%" }} ref={videoRef}></video>;
}

export default forwardRef(Video);
