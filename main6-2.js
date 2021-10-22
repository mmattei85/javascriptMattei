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
const remove=(nombre)=>{
    nombre=nombre.toLowerCase()
    
    const perro=findOne(nombre)
    const index=perritos.indexOf(perro)
    
    perritos.splice(index, 1)
} 

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
