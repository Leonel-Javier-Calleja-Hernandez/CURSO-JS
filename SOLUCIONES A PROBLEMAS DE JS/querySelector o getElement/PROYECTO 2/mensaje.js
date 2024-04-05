let mensaje = ""
let usuario = ""
function inicio() {
    document.querySelector("#escribir").onkeydown = teclado
    document.querySelector("#mandarMensaje").onclick = mandarMensaje
    document.querySelector("#usuario").value
    document.querySelector("nombreDeUsuario")
    console.log("listo js")
}
function mandarMensaje() {
    mensaje = document.querySelector("#escribir").value;
    usuario = document.querySelector("#usuario").value
    document.querySelector("#mensajes").innerHTML += `><span>${usuario} </span> escribio <br> ${mensaje} <br>`

    document.querySelector("#escribir").value = ""
    document.querySelector("#escribir").focus()

}



function teclado(e) {
    let codigo_tecla = e.keyCode
    if(codigo_tecla == 13){
        mandarMensaje()
    }
}
window.onload = inicio
console.log(mensaje)