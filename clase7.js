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

function imprimirNombreEdad(persona){
  var {nombre} = persona
  var {edad} = persona
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años `)
}

imprimirNombreEdad(gianny)
imprimirNombreEdad(dario)
