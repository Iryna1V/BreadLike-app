import React from "react";
import video from "../assets/video.mp4";

function Video() {
  return (
    <div>
      <video autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
