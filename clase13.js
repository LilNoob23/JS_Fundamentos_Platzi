var gianny = {
  nombre: 'Gianny',
  apellido: 'Guerrero',
  edad: 20,
  peso: 70
}

console.log(`Al inicio del año ${gianny.nombre} pesa ${gianny.peso} kg`)

// function aumentarDePeso (persona) {
//   return persona.peso += 200
// }

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
  var random = Math.random()

  if(random < 0.25) {
    aumentaDePeso(gianny)
  } else if (random < 0.5){
    adelgazar(gianny)
  }
}

console.log(`Al final del año ${gianny.nombre} pesa ${gianny.peso.toFixed(2)} kg`)
