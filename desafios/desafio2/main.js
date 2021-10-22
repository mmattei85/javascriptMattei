alert("Buen dia, a continuacion se le solicitaran unos datos")

let nombre=prompt("Por favor, ingrese su nombre:")
let apellido=prompt("ingrese su apellido:")
let año=prompt("ingrese su año de nacimiento:")

let añoActual= 2021
let validarEdad= añoActual-año

if((nombre != "") && (apellido != "")){
    alert(`muchas gracias ${nombre} ${apellido}`)
}else{
    alert(`por favor, revise los datos ingresados`)
}

if(validarEdad >= 18){
    alert(`usted tiene ${validarEdad} años. Puede ingresar a la pagina`)
}else{
    alert(`ATENCION:
usted tiene ${validarEdad} años. No puede ingresar a la pagina`)
}

console.log(`nombre ingresado: ${nombre}
apellido ingresado: ${apellido} 
año ingresado: ${año}
edad: ${validarEdad}`)
