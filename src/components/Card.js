import React from 'react'
import red from     "../../src/red_heart_card.png"
import black from   "../../src/spade_black_card.png"
import reverse from   "../../src/reverse_card.png"




const Card = (props) => {
  return (
    <>
    
        
        {props.img === true ? <img src={red} alt="RedCard" width={100} height={150} /> : <img src={black} alt="BlackCard" width={100} height={150} />}
        {props.img === true ? <img src={reverse} alt="ReverseCard" width={100} height={150} /> : <img src={black} alt="BlackCard" width={100} height={150} />}
        
        


        
    </>
  )
}

export default Card