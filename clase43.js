const gianny = {
  nombre: 'Gianny',
  apellido: 'Guerrero',
}

const yesika = {
  nombre: 'Yesika',
  apellido: 'Cortez',
}

function saludar(saludo = 'Hola') { //si no le mandamos nada como parámetro su valor por defecto será hola
  console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

// const saludarGianny = saludar.bind(gianny)
// const saludarYesika = saludar.bind(yesika)

//const saludarGianny = saludar.bind(gianny, 'Hola che')
// const saludarYesika = saludar.bind(yesika, 'Qué onda')

//setTimeout( saludar.bind(gianny, 'Hola che'), 1000) //bind tampoco modifica la función general saludar

//saludar.call(gianny, 'Hola che')

saludar.apply(gianny, ['Hola che'])
