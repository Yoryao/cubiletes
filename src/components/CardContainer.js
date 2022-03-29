import React from 'react'
import Header from './Header'
import Card from './Card'
import ResetButton from './ResetButton'
import { useState } from 'react'

const CardContainer = () => {

  

  const [estado , setEstado] = useState(false)
  const [contador, setContador] = useState(0)
  
  
  const voltear = () => {
  setContador(contador + 1)
  console.log("contador: " + contador)
  }

  const reset = () => {
    console.log("reset!!! Working !!! a resetear!!!")
    
  }

  return (
      <>
        <Header message={contador}></Header>
        <Card card={estado}  voltear={voltear} message={contador} ></Card>
        <Card card={estado}  voltear={voltear} message={contador} ></Card>
        <Card card={estado}  voltear={voltear} message={contador} ></Card>
        <ResetButton reset={reset}></ResetButton>

      </>
  )
}

export default CardContainer