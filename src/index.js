import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/*


1) aleatoriamente elegir 1 cubilete de 3 para insertar la bolita
2) aleatoriamente elegir 1 cubilete.
3) si coinciden los cubiletes, registrar el acierto en 1ra instancia y sumar el intento.
4) si no coincenden los cubiletes, volver a elegir sacando el numero anterior. 
5) si coinciden los cubiletes, registrar el acierto en 2da instancia y sumar el intento.
4) si no coincenden los cubiletes, registrar acierto en 3ra instanca.

let primerIntento = 0;
let segundoIntento = 0;
let tercerIntento = 0;
let segundaEleccion = 0;
let opciones = [1, 2, 3];

const elegirCubilete = () => {
  let indice = parseInt(Math.random() * opciones.length);
  return opciones[indice];
};

const informar = (pruebas) => {
  console.log(`Aciertos en el primer intento: ${primerIntento}`);
  console.log(`Aciertos en el segundo intento: ${segundoIntento}`);
  console.log(`Aciertos en el tercer intento: ${tercerIntento}`);

  let probabilidadUnTiro = parseInt((primerIntento * 100) / pruebas);
  let probabilidadDosTiros = parseInt((segundoIntento * 100) / pruebas) + probabilidadUnTiro;

  console.log(`Promedio de acierto en primer intento: ${probabilidadUnTiro}%`);
  console.log(`Promedio de acierto en segundo intento: ${probabilidadDosTiros}%`);
  console.log(`Promedio de acierto en tercer intento: ${100}%`);
};


const verificar = (objetivo, opcion) => {
  
 // console.log(`1) bola escondida: ${objetivo}. Bola Eleccion: ${opcion}`);
  
  if (objetivo === opcion) {
    // console.log(`Acerto a la primera`);
    primerIntento++;
  } else {
    let index = opciones.indexOf(opcion);
     opciones.splice(index, 1);
    // console.log("opciones: " + opciones);
    let segundaOpcion = opciones[parseInt(Math.random() * opciones.length)];
    
    // console.log(`2) bola escondida: ${objetivo}. Bola Eleccion: ${segundaOpcion}`);

    if (segundaOpcion === objetivo) {
      // console.log(`Acerto a la segunda`);
            segundoIntento++;
    } else {
      // console.log(`Acerto a la tercera`);
      tercerIntento++;
    }
  }

  opciones = [1, 2, 3];

};

const jugar = (partidas) => {
  for (let i = 0; i < partidas; i++) {
    let bolaEscondida = elegirCubilete();
    let primeraEleccion = elegirCubilete();
    verificar(bolaEscondida, primeraEleccion);
  }
  informar(partidas);
};

jugar(100000);



*/