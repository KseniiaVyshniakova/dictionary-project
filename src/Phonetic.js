import React from "react";
import AudioPlayer from "./Audio";

export default function Phonetic(props) {  
  return (
<div className="Phonetic d-flex mb-2">
  {props.phonetics.map(function (phonetic, index) {
       if (phonetic.audio && phonetic.text) {
          return (
            <div className="d-flex flex-wrap align-items-center" key={index}>
              <div className="player me-2">
                <AudioPlayer audio={phonetic.audio} />
              </div>
              <span className="text me-4">{phonetic.text}</span>
            </div>
          );
       } else {
          return null;
       }
      })}
    </div>
);
}


 

  
