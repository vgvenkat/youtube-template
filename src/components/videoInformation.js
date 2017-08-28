import React from "react";

const videoInformation = props =>
  <div
    className="videoInformation"
    style={{
      backgroundColor: "blanchedalmond",
      display: "inline-block",
      padding: "1em"
    }}
  >
    <p className="vtitle">
      {props.title}
    </p>
    <p className="vdescription">
      {props.description}
    </p>
  </div>;

export default videoInformation;
