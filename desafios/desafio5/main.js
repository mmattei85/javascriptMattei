//Bienvenida
let saludo1=prompt("Por favor, ingrese su nombre completo")
let bienvenida1=alert(`Gracias Agente ${saludo1}. A continuacion vamos a ver la informacion de las 5 personas mas buscadas por el FBI.

Siga las instrucciones por favor`)

let peticion=prompt(`Por favor, ingrese el numero asignado al sujeto

1. Isabella Mattei Zorrilla
2. Julian Gomez
3. Mariano Mattei
4. Sergio Ontivero
5. Sonia Zorrilla Lopez

para salir tipee "SALIR"`)

let resultadoPeticion=peticion.toLowerCase();

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
    this.info=alert(`LOS MAS BUSCADOS POR EL FBI:

    nombre completo: ${this.apellido}, ${this.nombre}
    edad: ${this.edad}
    nacionalidad: ${this.nacionalidad}
    estado: ${this.estado}`)}
    }

//personas:
const isabella=new personas("Isabella", "Mattei Zorrilla", 35, "Argentina", "PROFUGA");
const julian=new personas("Julian", "Gomez", 27, "Argentino", "DESCONOCIDO");
const mariano=new personas("Mariano", "Mattei", 36, "Argentino", "PROFUGO");
const sergio=new personas("Sergio", "Ontivero", 38, "Argentino", "FALLECIDO EL  07/2021");
const sonia=new personas("Sonia", "Zorrilla Lopez", 40, "Argentina Naturalizada", "PROFUGA");

//operaciones
while(resultadoPeticion != "salir" ){
    switch (resultadoPeticion) {
        case "1":
            alert(isabella.info());
            break;
        case "2":
            alert(julian.info());
            break;
        case "3":
            alert(mariano.info());
            break;
        case "4":
            alert(sergio.info());
            break;
        case "5":
            alert(sonia.info());
        default:
            alert("No se encontro sujeto. Verifique datos ingresados.")
            break;
    }
    //hay que poner la peticion y tambien cuando se pide "toLowerCase", sino repite siempre mismo resultado.
    peticion=prompt(`Por favor, ingrese el numero asignado al sujeto

    1. Isabella Mattei Zorrilla
    2. Julian Gomez
    3. Mariano Mattei
    4. Sergio Ontivero
    5. Sonia Zorrilla Lopez
    
    para salir tipee "SALIR"`)
    
    resultadoPeticion=peticion.toLowerCase();
}