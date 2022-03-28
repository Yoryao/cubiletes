import React from 'react'
import red from     "../../src/red_heart_card.png"
import black from   "../../src/spade_black_card.png"
import reverse from   "../../src/reverse_card.png"
import "./card.css"
import { useState } from 'react'




const Card = (props) => {

   return (
    <>
        {props.img === true ? <img src={reverse} alt="RedCard" /> : <img src={black} alt="BlackCard" />}
    </>
  )
}

export default Card