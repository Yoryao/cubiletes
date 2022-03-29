import React from 'react'
import resetButton from "../../src/resetButton.png"
const ResetButton = () => {


const reset = () => {
    console.log("Reset!")
}




  return (

    <>
    <button onClick={reset}>
        <img src={resetButton} alt="resetButton"/></button>



    </>


  
  
  
  
  
  
  
    )
}

export default ResetButton