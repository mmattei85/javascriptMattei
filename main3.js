/* 
ejercicio 1
//pedir numero por prompt
const numero=prompt("ingrese un numero")
//se calcula por los numeros del 0 al 10 inclusive
for(let i=0; i<=10; i++) {
    console.log(`${numero} x ${i} = ${numero*i}`)
}


//ejercicio 2
for (let i=0; i<=5; i++){
    let ingresarNombre=prompt("ingresar nombre")

    console.log(`Nombre ingresado ${ingresarNombre}`)
}

//ejercicio 3 - BREAK
const numero=prompt("ingrese un numero")
for(let i=0; i<=10; i++) {
    
    if(i==5){
        break; //al llegar al 5to valor, se detiene la operacion
    }
    console.log(`${numero} x ${i} = ${numero*i}`)
}

//ejercicio 4 - CONTINUE
const numero=prompt("ingrese un numero")
for(let i=0; i<=10; i++) {
    
    if(i==5){
        continue; //al llegar al 5to valor, lo saltea y continua con la operacion
    }
    console.log(`${numero} x ${i} = ${numero*i}`)
}


//ejercicio 5 - WHILE permite crear bucles que se repiten ninguna o muchas veces
const numero=4

let i=1;

while (i<=10){
    console.log(`${numero} x ${i} = ${numero*i}`)
//actualizacion
    i++;
}

//ejercicio 6 - WHILE: ESC, se ejecuta hasta que el usuario ingresa ESC

let i=prompt("ingrese un dato")

while(i !="ESC"){
    alert(`El usuario ingreso ${i}`)
    
    i=prompt("Ingrese otro dato")
}

mismo ejercicio con dos condiciones:

let i=prompt("ingrese un dato")
let j=prompt("ingrese password")

while ((i !="natalia") && (j !="123")) {
    alert(`El usuario ingreso ${i} ${j}`)
    
    //actualizacion
    i=prompt("Ingrese otro dato")
    j=prompt("ingrese contraseña")
}


//ejercicio 8 DO WHILE

do {
//inicio de algoritmo    
    i=prompt("Ingrese otro dato")
    j=prompt("ingrese contraseña")

    alert(`El usuario ingreso ${i} ${j}`)
}

while ((i !="natalia") && (j !="123"))

*/
//ejercicio 9 SWITCH, pide valor de entrada
//sintaxis: 
/*
switch (key) { //recibe una clave
    case value://evalua a la clave
        
        break;

    default:
        break;
}

const nombre =prompt("ingrese nombre")

switch (nombre) {
    case "natalia":
        alert("hola natalia")
        break;

    default:
        alert("no te conozco")
        break;
}
*/

//ejercicio con tutor:
/*
let name = prompt("ingrese su nombre")
let edad = Number(prompt("edad"))

switch ((name) && (edad)) {
    case "Natalia", 29:
        alert( `${name} ${edad}`)
        break;
        case "Nicolas", 25:
            alert( `${name} ${edad}`)
            break;
    default:
        alert("no te conozco")
        break;
}
*/
//ejercicio para entregar
let bienvenida=alert("vamos a multiplicar")
let numero1=prompt("ingrese primer numero")
let numero2=prompt("ingrese segundo numero")

let i=1;

while (i<=10){
    document.write(`${numero1} x ${numero2} = ${numero1*numero2}</br>`)
//actualizacion
    i++;
}

