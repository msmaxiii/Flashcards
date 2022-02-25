import React,{ useState } from 'react'


 function Flashcard ({flashcard}){
    const [flip,setFlip]= useState(false)
    // const cardback =[],

    return(
        <div 
        className={`card ${flip ? 'flip':''}`}
        onClick={() => setFlip(!flip)} >

        < div className= 'cards'>
        {flashcard.letter} 
        </div>

        

         {flip ?( <div className='cards'>
          <div>{flashcard.answer}</div>   
         <div>{flashcard.phonetic}</div>
         </div> 
         
         ): <div>{flashcard.letter}</div> } 
        </div>
    )
}
export default Flashcard;
