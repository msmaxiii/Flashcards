
import React, { useState } from "react";

function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);
  

  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      {flip ? (
        <div className="cards">
          <div> {flashcard.answer}</div>
          <div> {flashcard.phonetic}</div>
        </div>
      ) : (
        <div>{flashcard.letter}</div>
      )}
    </div>
  );
}
export default Flashcard;