import React from "react";
import red from "../../src/red_heart_card.png";
import black from "../../src/spade_black_card.png";
import reverse from "../../src/reverse_card.png";
import "./card.css";
import { useState , useEffect } from "react";

const Card = ({ card, voltear, message }) => {

  const [carta, setCarta] = useState(card);
  const [elegida, setElegida] = useState(false)
  const [color, setColor] = useState(red)

  useEffect(() => {
              setTimeout(() => { 
                setCarta(!carta); 
              }, 5000);
  }, [] );

  




  function tocarCarta() {
    if (message < 2 && !elegida) {
      voltear();
      console.log("carta tocada")
      setCarta(false);
      setElegida(true)
    
    } else if (message == 2){
      voltear();
      //console.log("carta tocada")
      setCarta(false);
      setColor(black)
    }
  }

  return (
    <>
      {carta === true ? (
        <button>
          <img src={reverse} alt="ReverseCard" onClick={tocarCarta} />{" "}
        </button>
      ) : (
        <button disabled={true}>
          <img src={color} alt="RedCard" onClick={tocarCarta} />{" "}
        </button>
      )}
    </>
  );
};

export default Card;
