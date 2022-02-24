import React,{useState} from 'react'


function Flashcard ({flashcard}){
    const [flip,setFlip]=useState(false)

    return(
        <div onClick={() =>setFlip(!flip) }>
            {flip ? flashcard.answer : flashcard.letter}
           
        </div>
    )
}




export default Flashcard;