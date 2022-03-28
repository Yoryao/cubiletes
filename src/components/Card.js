import React from "react";
import red from "../../src/red_heart_card.png";
import black from "../../src/spade_black_card.png";
import reverse from "../../src/reverse_card.png";
import "./card.css";
import { useState } from "react";

const Card = ({ card, voltear, message }) => {
  const [carta, setCarta] = useState(card);
const [elegida, setElegida] = useState(false)


  function tocarCarta() {
    if (message < 3 && !elegida) {
      voltear();
      console.log("carta tocada")
      setCarta(false);
      setElegida(true)
    
    }
  }

  return (
    <>
      {carta === true ? (
        <button>
          <img src={reverse} onClick={tocarCarta} alt="ReverseCard" />{" "}
        </button>
      ) : (
        <button disabled={true}>
          <img src={red} onClick={tocarCarta} alt="RedCard" />{" "}
        </button>
      )}
    </>
  );
};

export default Card;
