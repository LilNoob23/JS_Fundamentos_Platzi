function Persona(nombre, apellido, edad, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.edad = edad
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function () {
  if(this.altura > 1.8){
    console.log('Soy alto')
  }
}

var gianny = new Persona('Guerrero', 'Mucha', 30, 1.99)
var erika = new Persona('Erika', 'Luna')
var arturo = new Persona('Arturo', 'Martínez')
