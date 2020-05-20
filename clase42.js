const gianny = {
  nombre: 'Gianny',
  apellido: 'Guerrero',
  edad: 20
}

//const cumpleanios = persona => persona.edad++

const cumpleaniosInmutable = persona => ({
  ...persona,
  edad: persona.edad + 1
})
