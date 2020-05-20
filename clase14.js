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

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365

const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = gianny.peso - 3
var dias = 0

while (gianny.peso > META) {
  if (comeMucho()) {
    aumentaDePeso(gianny)
  }
  if (realizaDeporte) {
    adelgazar(gianny)
  }
  dias ++
}

console.log(`Pasaron ${dias} días hasta que ${gianny.nombre} adelgazó 3 kg`)
