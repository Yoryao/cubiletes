import React from 'react'
import { useState } from 'react'
import "./header.css"

const Header = (contador) => {

const [mensaje, setMensaje] = useState([
  "PRIMERO", "SEGUNDO", "TERCERO",
])









  return (
    <>
      {mensaje[contador]}
    </>
  )
}

export default Header

{/* <div id="header">Probabilidad entre 3 opciones</div> */}