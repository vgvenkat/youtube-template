import React from "react";
//send http://lorempixel.com/150/100/
const videoSuggestions = props =>
  <div className="videoSuggestions" style={{ display: "flex" }}>
    <p>
      <img src={props.imgSrc} alt="random suggestions" />
    </p>
    <p style={{ alignSelf: "center" }}>
      {props.title}
    </p>
  </div>;

export default videoSuggestions;
