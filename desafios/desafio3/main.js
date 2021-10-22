let bienvenida=alert("Bienvenido, a continuacion vamos a multiplicar")
let numero1=prompt("Por favor, ingrese primer numero")
let numero2=prompt("Por favor, ingrese el segundo numero")
let multiplicador=prompt("¿Cuanta veces quiere multiplicar su numero?")

for (let i = 1; i <= multiplicador; i++) {
    let resultado = numero1 * i ;
    document.write(`${numero1} X ${i} = ${resultado} </br>`)
}

