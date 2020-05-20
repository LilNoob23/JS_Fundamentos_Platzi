class Persona {

  constructor (nombre, apellido,  altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(fn) {
    var { nombre, apellido } = this

    console.log(`Hola, me llamo ${nombre} ${apellido}`);
    if (fn){//null, 0 y undefined siempre será false; un array, un objeto, un string(no vacío) aunque estén vacíos son verdaderos
      fn(nombre, apellido)
    }
  }

  soyAlto() {
    return this.altura > 1.8
  }

}

// function Persona(nombre, apellido,  altura) {
//   this.nombre = nombre
//   this.apellido = apellido
//   this.altura = altura
// }

class Desarrollador extends Persona {

    constructor (nombre, apellido, altura){
      super(nombre, apellido, altura)
    }

    saludar (fn){
      // var nombre = this.nombre
      // var apellido = this.apellido
      var { nombre, apellido } = this

      console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`);
      if (fn){//null, 0 y undefined siempre será false; un array, un bojeto, un string(no vacío) aunque estén vacíos son verdaderos
        fn(nombre, apellido, true)
      }
    }

}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`Ah mirá, no sabía que eras desarrollador/a`);
  }
}

var gianny = new Persona('Gianny', 'Guerrero', 1.71)
var erika = new Persona('Erika', 'Luna', 1.67)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.89)

gianny.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)
