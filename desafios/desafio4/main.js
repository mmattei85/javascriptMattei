let nombre=prompt("Buen dia, ingrese su nombre completo por favor")

alert(`Gracias ${nombre}.

A continuación vamos a completar su compra.`)

let nombreProducto=prompt("Por favor, ingrese nombre del producto que desea llevar")
let cantidadProducto=prompt("¿Cuantos desea llevar?")
let precioProducto=prompt("Ingrese precio del producto")
let iva=1.21


function mostrarIVA(){
    let resultadoIVA =(cantidadProducto*precioProducto)*iva
    return resultadoIVA
}

let precioFinal = mostrarIVA();

document.write(`Usted ha seleccionadola cantidad de ${cantidadProducto} unidades del producto ${nombreProducto}.
</br>Precio por unidad: $${precioProducto}
</br>Precio total CON IVA: $${precioFinal}`)

console.log(`El usuario ${nombre} ha comprado el producto: ${nombreProducto}.
Precio por unidad: ${precioProducto}
Precio sin IVA: ${precioProducto}*${cantidadProducto}
Precio final CON IVA: ${precioFinal}`)