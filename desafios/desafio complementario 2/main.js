//productos
const productos=[
  {producto: "Shawarma", precio: 300, dificultad: 3},
  {producto: "Falafel", precio: 500, dificultad: 5},
  {producto: "Mamules", precio: 200, dificultad: 2},
  {producto: "Tahine", precio: 100, dificultad: 1},
  {producto: "Hummus", precio: 400, dificultad: 4}
];

//bienvenida
let nombre=prompt(`BIENVENIDO A MARHABA, NUESTRA PAGINA DE COMIDAS ARABES.

Por favor, ingrese su nombre completo`)

if(nombre != ""){
    let verProductos=prompt(`muchas gracias ${nombre}. A continuacion podra ver nuestra lista de productos.
    
    Desea ver la lista ordenada por:
    A: Nombre del producto
    B: Precio
    C: Nivel de Dificultad`)
    let resultadoVerProductos=verProductos.toLowerCase();  

    if(resultadoVerProductos==="a"){
      productos.sort ((a,b)=>{
          if(a.producto < b.producto){
            return -1;
          }
          if(a.producto > b.producto){
            return 1;
          }
          return 0; 
      }); 
      console.log(productos)
    }
    if(resultadoVerProductos==="b"){
      productos.sort ((a,b)=>{
          if(a.precio < b.precio){
            return -1;
          }
          if(a.precio > b.precio){
            return 1;
          }
          return 0; 
      }); 
      console.log(productos)
    }
    if(resultadoVerProductos==="c"){
      productos.sort ((a,b)=>{
          if(a.dificultad < b.dificultad){
            return -1;
          }
          if(a.dificultad > b.dificultad){
            return 1;
          }
          return 0; 
      }); 
      console.log(productos)
    }    
}else{
    alert(`por favor, revise los datos ingresados`)
}
