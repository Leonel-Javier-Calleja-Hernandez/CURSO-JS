let nombre = prompt("cual es tu nombre")
let edad = prompt("edad")
let dolares = 10
 let mensaje = `hola mi nombre es ${nombre} mi edad es ${edad} y ${dolares} dolares equivale a ${convertir(dolares)}`
 
function convertir(d) {
    operacion = d * 3.8113
    return operacion;
}

 alert(mensaje)