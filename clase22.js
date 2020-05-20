function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8
}

var gianny = new Persona('Guerrero', 'Mucha', 30, 1.72)
var erika = new Persona('Erika', 'Luna', 1.75)
var arturo = new Persona('Arturo', 'Martínez', 1.82)
