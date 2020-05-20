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

function esMayorEdad(persona){
  return persona.edad >= MAYORIA_EDAD
}

function imprimirSiMayorEdad(persona) {
  // var analize = persona.edad;

  if(esMayorEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`)
  }else{
    console.log(`${persona.nombre} es menor de edad`)
  }

}

imprimirSiMayorEdad(gianny)
imprimirSiMayorEdad(juan)
