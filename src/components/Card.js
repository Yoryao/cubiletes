import React from 'react'
import red from     "../../src/red_heart_card.png"
import black from   "../../src/spade_black_card.png"
import reverse from   "../../src/reverse_card.png"
import "./card.css"
import { useState } from 'react'




const Card = ({card, voltear}) => {

const [carta, setCarta] = useState(card);

function tocarCarta(){
voltear();
console.log("tocar Carta");
setCarta(!carta);

}




   return (
    <>
        {carta === true ? 
        <button><img src={black} onClick={tocarCarta} alt="ReverseCard"/> </button>: <button><img src={red} onClick={tocarCarta} alt="RedCard"/> </button>}
    </>
  )
}

export default Card