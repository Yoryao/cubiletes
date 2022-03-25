import React from 'react'

const Card = (props) => {
  return (
    <>
        <div>PROBANDO EL DIV PARA LAS CARTAS
        
        {props.img == "true" ? <img src="../../public/roja.png" alt='Red_card'/> : <img src="../../public/roja.png" alt="Black_card"/>};



        </div>
    
    </>
  )
}

export default Card