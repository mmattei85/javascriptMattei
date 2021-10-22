//ARRAYS -  lista de elementos. 
/*
// se crean usando CONST porque son constantes.
const animales=["gato", "perro", "elefante"]
//para acceder a las arrays, hay que saber que cada elemento tiene una posicion (index)
//siempre empieza por el 0. en este caso, gato=0; perro=1; elefante=2
//para acceder se pone entre [] el numero de posicion deseada
console.log(animales[0])

console.log("********************")

//for
for (let index=0; index<3; index++){
    console.log(animales[index])    
}
console.log("********************")
//for...of
for (const animal of animales){
    console.log(animal)
}

console.log("el largo del array es: "+ animales.length)//te dice el largo del array, la cantidad de elementos que tiene

*/
//TO STRING - sirve para convertir mi array en STRING.
const animales=["gato", "perro", "elefante", "cebra"]

    console.log("CONVERTIR TODO A STRING: ")
    console.log(animales.toString())

// si quiero agregar un nuevo elemento, se usa PUSH
animales.push("leon")
    console.log("con push: ")
    console.log(animales)

//JOIN - convierte los elementos de un array a un string separados por un caracter indicado entre parentesis
    console.log("con JOIN: ")
    console.log(animales.join("-"))

//concat - sirve para unir dos arrays
const frutas=["uva", "frutilla", "manzana"]
    console.log("con CONCAT")
    console.log(animales.concat(frutas))

//SLICE - devuelve los elementos 0 al 3 sin incluir el ultimo
    console.log("con SLICE")
    console.log(animales.slice(1, 3))

//indexOf - se le pasa un elemento y si existe te devuelve un elemento.
    console.log("con indexOf: ")
    console.log(animales.indexOf("leon")) // devuelve el nro 4
    console.log(animales.indexOf("ballena"))//al no existir el elemento te da -1

//SPLICE - sirve para borrar elementos. se ubica entre parentesis cuales queres borrar.
//puede ser un elemento solo o varios (de posicion X a posicion Y)
animales.splice(0,2)
    console.log("con SPLICE: ")
    console.log(animales)

//forEach - te devuelve el objeto y el indice

animales.forEach((elemento, index, array)=>{
    console.log("con forEach: ")
    console.log(elemento)
    console.log(index)
    console.log(array)
})