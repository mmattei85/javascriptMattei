/*
EJERCICIO 1

let num1=1
let num2="1"

//es igual a...
if(num1==num2){
    console.log("los dos datos son iguales")
}

//es ESTRICTAMENTE igual
//aca evalua el valor y el tipo de dato (con los 3 "=" )
if(num1===num2){
    console.log("los dos datos son iguales")
}
else{
    console.log("los datos son de distinto tipo")
}

//se puede hacer lo mismo con las demas condicionales
*/
//EJERCICIO 2
let nombre=prompt("ingrese nombre")
let apellido=prompt("ingrese apellido")

if((nombre != "") && (apellido != "")){
    console.log(`hola ${nombre} ${apellido}`)
}else{
    console.log("revise los datos ingresados")
}