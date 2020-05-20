function heredaDe (prototipoHijo, prototipoPadre){
  var fn = function () {}  //noop
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido,  altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar =  () => {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8
}

heredaDe(Desarrollador, Persona)

function Desarrollador (nombre, apellido){
  this.nombre = nombre
  this.apellido = apellido
}

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}

//La herencia como tal no existe en JS, lo que sí existe
//es la herencia prototipal, vimos que si a un objeto desarrollador le decimos
//que ejecute el método soy alto, lo que hace es fijarse si en su prototipo
//encuentra ese método, si no lo encuentra va a ir a buscarlo al prototipo de ese prototipo y aspi sucesivamente,
//en caso no lo encuentre el método hasta llegar a Object nos lanzará un error
