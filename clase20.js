var gianny = {
  nombre: 'Gianny',
  apellido: 'Guerrero',
  edad: 20,
  sexo: 'M',
  altura: 1.61,
  cantidadLibros: 9
}

var josue = {
  nombre: 'Josué',
  apellido: 'Torres',
  edad: 21,
  sexo: 'M',
  altura: 1.65,
  cantidadLibros: 5
}

var maria = {
  nombre: 'María',
  apellido: 'Estrada',
  edad: 18,
  sexo: 'F',
  altura: 1.81,
  cantidadLibros: 7
}

const esAlta = ({altura}) => altura > 1.8

var personas = [gianny, josue, maria]

var personasAltas = personas.filter(esAlta)

const pasarAlturaCms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

// const pasarAlturaCms = (persona) => {
//   return {
//     ...persona,
//     altura: persona.altura * 100
//   }
// }

var personasCms = personas.map(pasarAlturaCms)

// var acum = 0
//
// for (var i = 0; i < personas.length; i++) {
//   acum += personas[i].cantidadLibros
// }

const reducer = (acum, {cantidadLibros}) => acum + cantidadLibros

var totalLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalLibros} libros`);
