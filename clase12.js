var gianny = {
  nombre : 'Gianny',
  apellido : 'Guerrero',
  edad: 20,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: true,
  guitarrista: false,
  web_designer: true
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 17
}

const MAYORIA_EDAD = 18

// function esMayorEdad(persona){
//   return persona.edad >= MAYORIA_EDAD
// }

// var esMayorEdad = function (persona) {
//   return persona.edad >= MAYORIA_EDAD
// }

// const esMayorEdad = persona => persona.edad >= MAYORIA_EDAD

const esMayorEdad = ({edad}) => edad >= MAYORIA_EDAD

function imprimirSiMayorEdad(persona) {
  // var analize = persona.edad;

  if(esMayorEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`)
  }else{
    console.log(`${persona.nombre} es menor de edad`)
  }

}

function permitirAcceso (persona) {
  if(!esMayorEdad(persona)){
    console.log('ACCESO DENEGADO');
  }
}

imprimirSiMayorEdad(gianny)
imprimirSiMayorEdad(juan)
