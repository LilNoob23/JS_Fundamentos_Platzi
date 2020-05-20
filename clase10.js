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

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es :`)

  if(persona.ingeniero){
    console.log('Ingeniero')
  }else{
    console.log('No es ingeniero')
  }

  if(persona.cocinero){
    console.log('Cocinero')
  }

  if(persona.cantante){
    console.log('Cantante')
  }

  if(persona.dj){
    console.log("Dj")
  }

  if(persona.guitarrista){
    console.log('Guitarrista')
  }

  if(persona.web_designer){
    console.log("Web Designer")
  }
}

imprimirProfesiones(gianny)

function imprimirSiMayorEdad(persona) {
  var analize = persona.edad;

  if(analize >= 18){
    console.log(`${persona.nombre} es mayor de edad`)
  }else{
    console.log(`${persona.nombre} es menor de edad`)
  }

}

imprimirSiMayorEdad(gianny)
