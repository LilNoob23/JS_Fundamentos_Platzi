
                //OPCIONAL
alert('hola')   //Cuando hacemos llamado a una función es opcional
var nombre = 'Sacha'      //cuando declaramos una variables
const saludarSacha = function () { ... }  //declarar y asignar

  //CASOS 100% INNECESARIOS
  function saludar() {
    console.log('asjasjdjedhj');
  };

  for (var i = 0; i < 10; i++){

  };

  //OBLIGATORIOS
  //1.- Cuando empezamos una primera línea y estamos escribiendo un array
  console.log('Hola mi nombre es Gianny')//; tabmién se puede colocar abajo
  ;[1, 2, 3].forEach(n => console.log(n * 2)

  //2.- Cuando iniciamos un template string con las comilla invertidas
  const nombre = 'Gianny'
  console.log('Hola mi nombre es Sacha');
  `${nombre} es un desarrollador`

  //3.- El return tiene que estar junto a las llaves de lo que retornará no debe de estar en otra línea
  function calcularDoble (numero) {
    return {
      original: numero, doble: numero * 2
    }
  }

    //Como no se puede es: (justificado que el compilador entiende al salto de línea como un ';')
