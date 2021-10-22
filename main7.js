// Storage - en la consola inspeccion de elementos en el navegador, 
// tenemos la pestaña APPLICATION que tiene una seccion Storage, donde se guarda info de las paginas
//nosotros vamos a usar LOCALSTORAGE para almacenar datos, como en un carrito de compras

//Los datos almacenados en localStorage (variable global preexistente) se almacena en el navegador
//de forma indefinida (o hasta que se borren los datos de navegación del browser): 
//La información persiste reinicios de navegador y hasta del sistema operativo .

//Para almacenar información se utiliza setItem:

//EJEMPLO:                 KEY         VALOR
// localStorage.setItem('bienvenida', '¡Hola Code!');

// Podemos acceder a la información usamos getItem:
// let mensaje =  localStorage.getItem('bienvenida');

// Es posible obtener todos los valores almacenados en  localStorage o sessionStorage con un bucle.
// El bucle a emplear es for con el método key

// for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     console.log("Clave: "+ clave);
//     console.log("Valor: "+ localStorage.getItem(clave));
// }

// ELIMINAR DATOS DEL STORAGE, usando el método removeItem o clear:

// localStorage.setItem('bienvenida', '¡Hola Code!');
// sessionStorage.setItem('esValido', true);

// localStorage.removeItem('bienvenida');
// sessionStorage.removeItem('esValido');
// localStorage.clear()    //elimina toda la información
// sessionStorage.clear() //elimina toda la información

// ejemplo usando lista de  perritos de la clase 6-2 

// C: CREATE
// R: READ
// U: UPDATE
// D: DELETE

class perro{//clase constructora
    constructor(nombre, color, edad){
    this.nombre=nombre.toLowerCase()
    this.color=color.toLowerCase()
    this.edad=edad
}

}
//vamos a ingresar datos y buscarlos. tb enlistarlos

//lista de perritos
const perritos=[]

//metodo que retorna la lista de perritos
const getAll=() => {
    return perritos;
}
// metodo para agregar un perro a la lista
const create=(perrito)=>{
    perritos.push(perrito)

    //ACA AGREGAMOS AL STORAGE
    localStorage.setItem("perritos", JSON.stringify(perritos))
}


//metodo para hallar un perro por nombre:
const findOne=(nombre)=>{
    const perro=perritos.find(perro=>perro.nombre===nombre)

    if(!perro){
        throw new Error(`No existe ${nombre}`)
    }
    return perro
}

//metodo para eliminar un perrito de la lista:
// const remove=(nombre)=>{
//     nombre=nombre.toLowerCase()
    
//     const perro=findOne(nombre)
//     const index=perritos.indexOf(perro)
    
//     perritos.splice(index, 1)
// } 

//metodo para modificar un perrito
const update=(nombre, color) =>{
    const perro=findOne(nombre)
    perro.color=color
}

// paso 1: creo un nuevo perro como instancia de la clase perro
const perro1= new perro("molo", "marron", 1)
const perro2= new perro("malena", "negro", 25)
const perro3= new perro("argos", "negro", 20)
const perro4= new perro("pacha", "marron", 15)


//paso 2: agregar perro 1 a la lista
create(perro1)
create(perro2)
create(perro3)
create(perro4)

// paso 3: buscar perro por su nombre. revisa toda la lista y devuelve resultado
//console.log(findOne("molo")) //si existe en la lista
//console.log(findOne("Floyd"))//no existe en la lista


//eliminar datos
//remove("molo")
//actualizar datos de perro
//update("argos", "blanco")

//obtener todos los perros
console.log(getAll())

