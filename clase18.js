var gianny = {
  nombre: 'Gianny',
  apellido: 'Guerrero',
  edad: 20,
  sexo: 'M',
  altura: 1.61
}

var josue = {
  nombre: 'Josué',
  apellido: 'Torres',
  edad: 21,
  sexo: 'M',
  altura: 1.65
}

var maria = {
  nombre: 'María',
  apellido: 'Estrada',
  edad: 18,
  sexo: 'F',
  altura: 1.81
}

// const esAlta = persona => persona.altura > 1.8
// const esAlta = ({altura}) => altura > 1.8
const esBaja = ({altura}) => altura <=1.8

var personas = [gianny, josue, maria]

// var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
// var personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.8
// })

// console.log(personasAltas);
console.log(personasBajas);
