import React from "react";
import video from "../loremipsum.mp4";
const VideoComponent = () =>
  <div className="videoComponent">
    <video src={video} width="400" height="300" controls />
  </div>;

export default VideoComponent;
