var nombre = 'Gianny', apellido = 'Guerrero'

var nombreMayusculas = nombre.toUpperCase()
var apellidoMinusculas = apellido.toLowerCase()

var primeraLetraNombre = nombre.charAt(0)

var cantidadLetrasNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)

var ultimaLetraNombre = nombre.charAt(cantidadLetrasNombre-1)

console.log(`La última letra del nombre ${nombre} es '${ultimaLetraNombre}'`)
