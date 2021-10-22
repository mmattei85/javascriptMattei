let nombre=prompt("Buen dia, ingrese su nombre completo por favor")

alert(`Gracias ${nombre}.

A continuación vamos a completar su compra.`)


let nombreProducto=prompt("Por favor, ingrese nombre del producto que desea llevar")
let cantidadProducto=prompt("¿Cuantos desea llevar?")
let precioProducto=prompt("Ingrese precio del producto")
let envioProducto=prompt("¿Desea que le enviemos el producto a su domicilio? Esto tendria un costo extra de $500 al precio final")
let iva=1.21

//funcion 1: precio x cantidad
function precioCantidad(){
    let resultadoPrecioCantidad =(cantidadProducto*precioProducto)
    return resultadoPrecioCantidad
}
let precioFinalCantidad = precioCantidad();

//funcion 2: precio con IVA
function mostrarIVA(){
    let resultadoIVA =(precioFinalCantidad*iva)
    return resultadoIVA
}
let precioFinalIVA = mostrarIVA();

//funcion 3: envio a domicilio
function delivery(){
    if((envioProducto == "SI") || (envioProducto == "si") || (envioProducto=="Si")){
        let resultadoDelivery=precioFinalIVA+500    
        return resultadoDelivery

        }else{
        if((envioProducto == "NO") || (envioProducto == "no") || (envioProducto=="No")){
            let resultadoDelivery=precioFinalIVA    
            return resultadoDelivery
    
        }else{
            alert(`Confirmamos que usted NO desea que le enviemos el producto a su domicilio.`)
        } 
    
   }}

precioFinalDelivery=delivery();

alert(`Gracias por elegirnos. A continuacion vera los detalles de su compra`)

document.write(`Usted ha seleccionado la cantidad de ${cantidadProducto} unidades del producto ${nombreProducto}.
</br></br>Precio por unidad: $${precioProducto}
</br></br>Envio a domicilio ($500 extras)*: ${envioProducto} 
</br>* El costo del envio a domicilio se vera reflejado en el Precio Final.
</br></br>Precio Final (IVA incluido): $${precioFinalDelivery}

`)

console.log(`El usuario ${nombre} ha comprado el producto: ${nombreProducto}.
Cantidad de unidades: ${cantidadProducto}
Precio por unidad: $${precioProducto}
Precio total sin IVA: $${precioFinalCantidad}
Precio final CON IVA: $${precioFinalIVA}
Envio a domicilio: ${envioProducto}
Precio final con envio a domicilio (si fue aceptado): $${precioFinalDelivery}
`)