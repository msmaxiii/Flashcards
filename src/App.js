
import './App.css';
import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import Cardlist from './Components/Cardlist';
import Home from './Pages/Home';
import cards from './cards';
import cardback from'./cardback';


function App () {
  const [cardsArray,setCardsArray]=useState(cards)

  // function handleSubmit(e){
  //   e.preventDefault()
  // }

  // function displayAll(e){
  // e.preventDefault()
  // for (let i=0; j<= cards.length; j++){
  //   if cards[j].value>=searchCard.value
  // };


  
  return (

  <div>
       {/* <button onClick={this.handleSubmit}>Next letter</button> */}
   
       <div className="App">
       
       {/* <h1> Greek Alphabet FlashCards</h1>   */}
     <Home/>
      <Cardlist flashcard={cardsArray} />
    
  </div>
  </div>
  )
}


export default App;
