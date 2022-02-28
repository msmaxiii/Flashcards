
import './App.css';
import React, { useState } from 'react';
import Footer from './Components/Footer';
import Cardlist from './Components/Cardlist';
import Home from './Pages/Home';
import cards from './cards';



function App () {
  const [cardsArray,setCardsArray]=useState(cards)

  return (

  <div>
      
   
       <div className="App">
      <Home/>
      <Cardlist flashcard={cardsArray} />
      <Footer/>
      </div>
      
  </div>
  )
}


export default App;
