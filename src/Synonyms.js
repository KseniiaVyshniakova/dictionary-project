import React from "react";
import "./Synonyms.css";
import SynonymWord from "./SynonymWord";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="synonyms">
        <h4>Synonyms:</h4>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index} className="synonym">
              <SynonymWord
                synonym={synonym}                
              />
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
