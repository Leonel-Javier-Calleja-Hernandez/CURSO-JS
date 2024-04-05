var numero1 = 1 
var numero2 = 2



function iniciar() {
    document.getElementById("boton").onclick = mandarMensaje;
}
function mensaje(a,b) {
    mandar =`hola ${a} y ${b} `
    return mandar;
}
function mandarMensaje() {
mostrar=mensaje(("leonel tu numero es " + numero1),("angel tu numero es " + numero2) )
console.log(mensaje)
alert(mostrar)
}


window.onload=iniciar
