import React from "react";
import { useState } from "react";
import "./header.css";

const Header = ({ message }) => {
  const [mensaje, setMensaje] = useState([
    "Explicacion",
    "primer resultado",
    "segundo resultado",
    "final",
  ]);

  return (
    <>
      {message < 3 ? (
        <h1>Hola: {mensaje[message]}</h1>
      ) : (
        <div>
          <h1>Hola: {mensaje[message]}</h1>
          <button>J U G A R</button>
        </div>
      )}
    </>
  );
};

export default Header;

{
  /* <div id="header">Probabilidad entre 3 opciones</div> */
}
