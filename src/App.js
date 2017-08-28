import React, { Component } from "react";
import SearchBar from "./components/searchbar";
import VideoComponent from "./components/videocomponent";
import VideoInformation from "./components/videoInformation";
import VideoSuggestion from "./components/videoSuggestions";

import "./App.css";
const loremImage = "http://lorempixel.com/150/100/";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <em>Probable Youtube template</em>
        </h1>
        <SearchBar />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly"
          }}
        >
          <div>
            <VideoComponent />
            <VideoInformation
              title="Lorem Ipsum video"
              description="just me blabing away"
            />
          </div>
          <div>
            <VideoSuggestion imgSrc={loremImage} title="Random suggestion1" />
            <VideoSuggestion imgSrc={loremImage} title="Random suggestion2" />
            <VideoSuggestion imgSrc={loremImage} title="Random suggestion3" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
