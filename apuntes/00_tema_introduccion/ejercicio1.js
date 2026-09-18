// Ejercicio 1 de js
//
/*
console.log("Hola mundo")

// tipos de datso en JS
//
// String y Number
// '' "" `` comillas francesas
// var let const

let nombre = "Adam"
let apellidos = "CU"
let aniosTrabajo = 25
console.log(`Hola a todos me llamo ${nombre}, ${apellidos}, y llevo trabajando ${aniosTrabajo} años`)
//console.log(typeOff(String(aniosTrabajo)))
//console.log(typeOff(Number(apellidos)))

//Validaciones basicas == ===


//== <-- Significa si el valor de la izquierda es igual a el valor de la derecha
// === <-- Significa si el valor y tipo de la izquierda es igual a el valor y tipo de la derecha

// '5' == 5 <-- True
// '5' === 5 <-- False

// ternarias  evaluacion_expresion ? verdadero : falso
//

const edad = "21"
edad > 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad")*/

// Ejercicio : Dada la edad, los minutos y los segundos. 
// Comprobar 1. Si la edad es un numero positivo y mayor que 18 extrictamente
// 2. Comprobar si la hora y los minutos son valores validos dentro de nuestro sistema de numeracion.


const edad = 19
const minutos = 59
const segundos = 12

edad > 18 ? console.log("La edad es mayor a 18") : console.log("La edad no es mayor a 18")

minutos && segundos === Number ? console.log("Es valido") : console.log("No es valido")
