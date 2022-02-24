import React from "react";
import Flashcard from "./Flashcard";

function Cardlist(props) {
  return (
    <div className="card-grid">
        <h2>Cardlist</h2>
      {props.flashcard && props.flashcard.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
}

export default Cardlist;
