/*
//objetos

//crear objeto a partir de la instanciacion de OBJECT
const persona1= new Object({
    nombre: "andres"
})

//literal- vamos a utilizar esta opcion.
const persona2= {
    //propiedades
    nombre:"andres",
    edad:25,

    //metodo
    saludar:function(){
        console.log("hola que tal?")
    }
}
*/


/*
console.log(typeof persona1) typeof muestra que clase de objeto tenemos (string, numero, objeto etc)
console.log(typeof persona2)

console.log(persona1)
*/
/*
//accediendo a propiedades

//notacion de punto
console.log(persona2)
console.log(persona2.nombre)
console.log(persona2.edad)

//ejecutar el metodo (poniendo los dos "()" despues del llamado)
console.log(persona2.saludar())
//el UNDEFINED que aparece en la consola, es normal,viene predeterminado.


persona2.saludar()
//agrega propiedad al objeto
persona2.profesion="desarrollador"
console.log(persona2)
*/

//funcion constructora: sirve para no repetir lo mismo varias veces
//se le asignan las propiedades entre parentesis

// function Persona(nombre, edad){
// //this. hace referencia al contexto (variable) en que estoy parado
//     this.nombre=nombre;
//     this.edad=edad;
// }

// const persona7=new Persona("mauricio", 19)
// console.log(persona7)
/*
//operadores IN y FOR..IN
const persona2= {
    //propiedades
    nombre:"andres",
    edad:25,

    //metodo
    saludar:function(){
        console.log("hola que tal?")
    }
}

console.log("nombre" in persona2)//existe la propiedad NOMBRE dentro del objeto PERSONA2?
console.log("apellido" in persona2)//existe la propiedad APELLIDO dentro del objeto PERSONA2?

//for...in -> te enlista las propiedades del objeto 
for (const prop in persona2){
    console.log(prop)
}

class Producto{
constructor(nombre, precio, enStock){
    this.nombre=nombre;
    this.precio=precio;
    this.enStock=enStock;
}
getPrecioConIva(){
    this.precio=this.precio*1.21
    return this.precio
}
getPrecio(){
    return this.precio
}
}

const producto=new Producto("Fernet", 500)
console.log(producto.getPrecio())
console.log(producto.getPrecioConIva())
*/

