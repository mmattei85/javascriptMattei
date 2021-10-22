
let nombre=prompt(`BIENVENIDO A MARHABA, NUESTRA PAGINA DE COMIDAS ARABES.

Por favor, ingrese su nombre completo`)

if(nombre != ""){
    alert(`muchas gracias ${nombre}. A continuacion vamos a hacer el pedido`)
}else{
    alert(`por favor, revise los datos ingresados`)
}

//compra
let ProductoDeseado=prompt("Por favor, ingrese numero de orden del producto que desea llevar")
let cantidadProducto=prompt(`¿Que cantidad desea llevar?`)

//resultados
if(ProductoDeseado==1){
    document.write(`*************************</br></br>
    Ha realizado el siguiente pedido:</br></br>
    Producto: Shawarma</br>
    Cantidad: ${cantidadProducto}</br>
    Total de compra: $${cantidadProducto*450}`)
    
}else if(ProductoDeseado==2){
    document.write(`*************************</br></br>
    Ha realizado el siguiente pedido:</br></br>
    Producto: Falafel</br>
    Cantidad: ${cantidadProducto}</br>
    Total de compra: $${cantidadProducto*300}`)

}else if(ProductoDeseado==3){
    document.write(`*************************</br></br>
    Ha realizado el siguiente pedido:</br></br>
    Producto: Mamules</br>
    Cantidad: ${cantidadProducto}</br>
    Total de compra: $${cantidadProducto*150}`)
}
