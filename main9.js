//EVENTOS
//CONTROLAR ACCIONES DE USUARIOS Y DEFINIR COMPORTAMIENTO
//DE UNA PAGINA O APLICACION. SE PUEDE ASIGNAR UNA FUNCION, ES DECIR
//QUE SUCEDA ALGO CUANDO EL USUARIO HAGA DETERMINADA ACCION. SE LLAMA "EVENT HANDLER"

const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const btn4=document.getElementById("btn4")

//console.log(btn1)

//primera opcion: addEventListener

btn1.addEventListener("click", ()=>{
    console.log("hiciste click con addEventListener")
})

//segunda opcion: onclick
btn2.onclick=() => {
    console.log("hiciste click con onclick")
}

//terera opcion
//se hace desde el html pero no se recomienda. ver boton 3 en index.html

/*
//mas ejercicios:
const form=document.getElementById("form")
const inputName=document.getElementById("input-name")
const checkBox=document.getElementById("check-box")

let gustaMate=false

checkBox.onChange=()=>{
    gustaMate = !gustaMate
console.log(`Gusta mate: ${gustaMate}`)
}

form.onSubmit=()=>{
    let message
    if(gustaMate){
        message= `A ${inputName} le gusta el mate`
    
    }else{
        message=`a ${inputName} NO le gusta el mate`
    }
}
alert(message)
*/

//eventos del mouse
btn4.onmouseleave=()=>{
    console.log("no te vayas chavo")
}
btn4.onmouseover=()=>{
    console.log("has vuelto!")
}

//eventos para teclado:
//para este ejemplo tiene que estar declarada la etiqueta inputName
inputName.onekeydown=()=>{
    console.log("presionaste una tecla")
}
inputName.onekeyup=()=>{
    console.log("levantaste el dedo")
}
inputName.onfocus=()=>{
    console.log("on focus!")
}
inputName.onblur=()=>{
    console.log("saliste")
}