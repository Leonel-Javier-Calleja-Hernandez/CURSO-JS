let mensaje = ""

function inicio() {
    document.querySelector("#escribir").value
    document.querySelector("#mandarMensaje").onclick = mandarMensaje
    
    console.log("listo js")
}
function mandarMensaje() {
    mensaje = document.querySelector("#escribir").value;
    document.querySelector("#mensajes").innerHTML += `${mensaje} <br>`
}
window.onload = inicio
console.log(mensaje)