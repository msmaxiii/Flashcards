
import './App.css';
import React, { useState } from 'react';
import Cardlist from './Components/Cardlist';


function App () {
    
  // const [Flashcards,setFlashcards]= useState(Flashcards)
  return (

    <div className="App">
       
      <h1> Greek Alphabet FlashCards</h1>

    <Cardlist />

    </div>
  );
}

// const FlashCards =[
//   {
    
//     letter:"",
//     answer:""
//   }
// ]

export default App;
