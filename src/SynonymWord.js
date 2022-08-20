import React from "react";
import "./Synonyms.css"

export default function SynonymWord(props) {
 
  return (
    <div className="SynonymWord d-inline">
      <button >{props.synonym}</button>
    </div>
  );
}
