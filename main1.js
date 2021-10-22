//tipos de datos:

//1. strings -> cadena de texto. cualquier valor entre comillas

//ejemplo:
let nombre="mariano"
let numeroString="2"
let apellido="mattei"

//2. integer -> numeros, sin comillas

//ejemplo:
let num=3
let numero=2

//NOTA: usar console.log() para mostrar operaciones realizadas.

console.log(numero+num)

//concatenacion es cuando el console.log lee los datos como cadenas de textos y lo junta todo.
//ejemplo. lee ambos datos de las let numeroString y num y las une sin hacer la suma pedida:
console.log("concatenacion: "+ numeroString + num)

//para solucionarlo uno tiene que PARSEARLO. es decir cambiar el tipo de dato que lee
//sin modificar el tipo de dato ingresado: se pone parseInt("let a modificar"):

console.log("concatenacion: "+ (parseInt(numeroString) + num))

//una forma mas simplificada para anotar las cadenas de texto es asi:
//cuando usamos el simbolo ${}, podemos escribir variables (let), pero hay que usar `` ("alt gr + }")
//${"variables"} lo que hace es 
console.log(`${nombre} esto es un texto de prueba ${apellido}`)


//PROMPT Y ALERT
//se usan para que el usuario interactue con la pagina ingresando 
//datos para realizar alguna funcion. ejemplo

let name=prompt("ingrese su nombre")

alert(`usted ingreso ${name} muchas gracias`)
console.log("el texto ingresado es: "+name)