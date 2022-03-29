import React from 'react'
import Header from './Header'
import Card from './Card'
import { useState } from 'react'

const CardContainer = () => {

  const [estado , setEstado] = useState(false)
  const [contador, setContador] = useState(0)
  
  
  const voltear = () => {
  setContador(contador + 1)
  console.log("contador: " + contador)
  }

  return (
      <>
        <Header message={contador}></Header>
        <Card card={estado}  voltear={voltear} message={contador} ></Card>
        <Card card={estado}  voltear={voltear} message={contador} ></Card>
        <Card card={estado}  voltear={voltear} message={contador} ></Card>
      </>
  )
}

export default CardContainer