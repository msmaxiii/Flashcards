
import './App.css';
import React, { useState } from 'react';
// import NavBar from './Components/NavBar';
import Cardlist from './Components/Cardlist';
import Home from './Pages/Home';
import cards from './cards';


function App () {
  const [cardsArray,setCardsArray]=useState(cards)
  
  return (

    <div className="App">
       
      <h1> Greek Alphabet FlashCards</h1>

    <Cardlist flashcard={cardsArray} />

    </div>
  );
}


export default App;
