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

function imprimirNombreMayuscula(persona){
  //var nombre = persona.nombre
  var {nombre} = persona
  console.log(persona.nombre.toUpperCase())
}

imprimirNombreMayuscula(gianny)
imprimirNombreMayuscula(dario)

function cumpleanos(persona) {
  return{
    ...persona,
    edad: persona.edad + 1
    }
}


// function cumpleanos(edad){
//    edad += 1
// }
