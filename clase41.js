function crearSaludo(finalFrase){

  return function(nombre) {
    console.log(`Hola ${nombre} ${finalFrase}`)
  }

}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('guey')
const saludoColombiano = crearSaludo('amigo')

saludoArgentino('Sacha')  //Hola Sacha che
saludoMexicano('Sacha')   //Hola Sacha guey
saludoColombiano('Sacha') //Hola Sacha amigo
