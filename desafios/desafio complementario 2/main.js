//Bienvenida
let saludo1=prompt("Por favor, ingrese su nombre completo")
//menu 1
let opcionA=prompt(`Gracias ${saludo1}. Indique la accion deseada:

A. Ver el listado actual ordenado por ESTADO
B: Agregar una nueva persona a la lista
C: Ordenar Alfabeticamente el listado actual
D: Salir`)

let resultadoPeticion1=opcionA.toLowerCase();


//plantilla de datos para definir objetos:
class personas{
    constructor(nombre, apellido, edad, nacionalidad, estado){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.nacionalidad=nacionalidad;
    this.estado=estado;
    }
    
    //alert informativo
    info(){
    this.info=document.write(`</br></br>
    nombre completo: ${this.apellido}, ${this.nombre}</br>
    edad: ${this.edad}</br>
    nacionalidad: ${this.nacionalidad}</br>
    estado: ${this.estado}</br></br>
    *************************************************`)}
}

//personas:
const isabella=new personas("Isabella", "Mattei Zorrilla", 35, "Argentina", "PROFUGA");
const julian=new personas("Julian", "Gomez", 27, "Argentino", "DESCONOCIDO");
const mariano=new personas("Mariano", "Mattei", 36, "Argentino", "PROFUGO");
const sergio=new personas("Sergio", "Ontivero", 38, "Argentino", "FALLECIDO EL  07/2021");
const sonia=new personas("Sonia", "Zorrilla Lopez", 40, "Argentina Naturalizada", "PROFUGA");


let arrayPersonas=[];

if(resultadoPeticion1==="a"){document.write(`</br></br>
    ${julian.info()}</br></br>
    ${sergio.info()}</br></br>
    ${isabella.info()}</br></br>
    ${mariano.info()}</br></br>
    ${sonia.info()}`)

    alert("A continuacion vera en la pagina el listado solicitado. Si desea modificarlo refresque la pagina y eliga la opcion correspondiente. Muchas gracias.")

}else if(resultadoPeticion1==="b"){ 
let nombreNuevo=prompt("por favor, ingrese nombre del sospechoso")
let apellidoNuevo=prompt("ingrese apellido del sospechoso")
let edadNueva=prompt("Ingrese la edad del sospechoso")
let nacionalidadNueva=prompt("ingrese la nacionalidad del sospechoso")
let estadoNuevo=prompt("ingrese el estado Actual del sospechoso")

arrayPersonas.push(new personas(nombreNuevo, apellidoNuevo, edadNueva, nacionalidadNueva, estadoNuevo))

}else if(resultadoPeticion1==="c"){
//document.write(`${arrayPersonas.sort()}`)

for(personas of arrayPersonas)
words.sort((a, b) => {
  if (a == b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
  return 1;
});
document.write(`${arrayPersonas.info()}`)

}else if(resultadoPeticion1==="d"){
    alert(`Gracias por utilizar nuestros servicios.
    
    ${saludo1}, que tenga un buen dia`)

}else{
    alert("por favor, verifique los datos ingresados")
}   


for(personas of arrayPersonas){
    alert("Gracias por utilizar nuestros  serevicios. A continuacion aparecera en la pagina los datos ingresados:")

    document.write(`
    ***************************************************************************</br>
    ***************************************************************************</br></br>
    NUEVO INGRESO:</br></br>
    Apellido y Nombre: ${personas.apellido}, ${personas.nombre}</br></br>
    Edad: ${personas.edad}</br></br>
    Nacionalidad: ${personas.nacionalidad}</br></br>
    Estado Actual: ${personas.estado}</br></br>
    ***************************************************************************</br>
    ***************************************************************************`)

    document.write(`${isabella.info()}</br></br>
    ${julian.info()}</br></br>
    ${mariano.info()}</br></br>
    ${sergio.info()}</br></br>
    ${sonia.info()}`)
}