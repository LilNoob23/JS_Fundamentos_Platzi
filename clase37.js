var gianny = {
  nombre: 'Gianny',
  apellido: 'Guerrero',
  edad: 20
}

function esMayorEdad(persona) {

  let mensaje //siempre combiene declararlas arriba para ver cuáles son todas
              //las variables que usará la presente función
  const MAYORIA_EDAD = 18   //Sí podemos modificar pero no podemos reasignar,
                            //como en el caso de un array, podemos pushearlo
                            //pero no reasignarlo

  if (persona.edad >= MAYORIA_EDAD) {
    mensaje = 'Es mayor de edad'
  } else {
    mensaje = 'Es menor de edad'
  }
  console.log(mensaje)
  console.log(mensaje2);
}

//esMayorEdad(gianny)

for (let i = 0; i < array.length; i++) {
  console.log(i );
}

console.log(`Terminó el for, el valor de i es ${i}`);
