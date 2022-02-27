
import './App.css';
import React, { useState } from 'react';
// import NavBar from './Components/NavBar';
import Cardlist from './Components/Cardlist';
import Home from './Pages/Home';
import cards from './cards';



function App () {
  const [cardsArray,setCardsArray]=useState(cards)

  // function handleSubmit(e){
  //   e.preventDefault()
  // }

 


  
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
