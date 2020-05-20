var gianny = {
  nombre: 'Gianny',
  apellido: 'Guerrero',
  edad: 20,
  sexo: 'M'
}

var josue = {
  nombre: 'Josué',
  apellido: 'Torres',
  edad: 21,
  sexo: 'M'
}

var maria = {
  nombre: 'María',
  apellido: 'Estrada',
  edad: 18,
  sexo: 'F'
}

var personas = [gianny, josue, maria]

console.log(personas[0].apellido);
console.log(personas[0]['apellido']);

for (var i = 0; i < personas.length; i++){
  var persona = personas[i]
  console.log(`${persona.nombre} tiene ${persona.edad} años de edad`);
}
