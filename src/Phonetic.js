import React from "react";
import ReactPlayer from "react-player";
import "./Phonetic.css";


export default function Phonetic(props) {
  return (
    <div className="Phonetic d-flex mb-2">
      <div className="player-wrapper me-3">
        <ReactPlayer
          className="react-player"
          url={props.phonetic.audio}
          playing={false}
          controls={true}
          height={30}
          width={230}
                  />
      </div>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
