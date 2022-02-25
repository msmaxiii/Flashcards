import React from "react";
import Flashcard from "./Flashcard";

 function Cardlist({flashcard}) {
   console.log(flashcard)
  return (
    <div className="card-grid">
      {flashcard.map(flashcard => {
        return <Flashcard flashcard ={flashcard} key={flashcard.id}/>
        
      })}

       
   
     
    
    </div>
  )
}

export default Cardlist;
