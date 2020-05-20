class Persona {

  constructor (nombre, apellido,  altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
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

    saludar (){
      console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
    }

}

//La herencia como tal no existe en JS, lo que sí existe
//es la herencia prototipal, vimos que si a un objeto desarrollador le decimos
//que ejecute el método soy alto, lo que hace es fijarse si en su prototipo
//encuentra ese método, si no lo encuentra va a ir a buscarlo al prototipo de ese prototipo y aspi sucesivamente,
//en caso no lo encuentre el método hasta llegar a Object nos lanzará un error
