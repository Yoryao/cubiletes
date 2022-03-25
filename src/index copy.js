/*
1) aleatoriamente elegir 1 cubilete de 3 para insertar la bolita
2) aleatoriamente elegir 1 cubilete.
3) si coinciden los cubiletes, registrar el acierto en 1ra instancia y sumar el intento.
4) si no coincenden los cubiletes, volver a elegir sacando el numero anterior. 
5) si coinciden los cubiletes, registrar el acierto en 2da instancia y sumar el intento.
4) si no coincenden los cubiletes, registrar acierto en 3ra instanca.
*/
let primerIntento = 0;
let segundoIntento = 0;
let opciones = [1, 2, 3];

const elegirCubilete = () => {
  let indice = parseInt(Math.random() * opciones.length);
  return opciones[indice];
};

const informar = (pruebas) => {
  console.log(`Aciertos en el primer intento: ${primerIntento}`);
  console.log(`Aciertos en el segundo intento: ${segundoIntento}`);

  let probabilidadUnTiro = parseInt((primerIntento * 100) / pruebas);
  let probabilidadDosTiros = parseInt((segundoIntento * 100) / pruebas);

  console.log(`Promedio de acierto en primer intento: ${probabilidadUnTiro}%`);
  console.log(`Promedio de acierto en segundo intento: ${probabilidadDosTiros}%`);
};


const verificar = (objetivo, opcion) => {
  if (opcion === objetivo) {
    primerIntento++;
 //   console.log("acerto a la primera. ");
  } else {
    segundoIntento++;
 //   console.log("acerto con el cambio . ");
  }
};

//     let tercero = 0;

//     opciones.forEach(element => {

//       if (element != opcion & element != objetivo) {

//          tercero = element;

//       }

// return tercero

//     });

//     console.log(objetivo)
//     console.log(opcion)

// console.log("Tercero: " + tercero)

const jugar = (partidas) => {
  for (let i = 0; i < partidas; i++) {
    let bolaEscondida = elegirCubilete();
    let primeraEleccion = elegirCubilete();
    verificar(bolaEscondida, primeraEleccion);
  }
  informar(partidas);
};

jugar(1000000);
