var gianny = {
  nombre: 'Gianny',
  apellido: 'Guerrero',
  edad: 28
}

var dario = {
  nombre: 'Dario',
  apellido: 'Susnisky',
  edad: 27
}

// function imprimirNombreMayuscula(persona){
//   console.log(persona.nombre.toUpperCase())
// }

function imprimirNombreMayuscula({nombre}){
  console.log(nombre.toUpperCase())
}

imprimirNombreMayuscula(gianny)
imprimirNombreMayuscula(dario)
// imprimirNombreMayuscula({nombre: 'Pepito'})
imprimirNombreMayuscula({apellido: 'Gomez'})
