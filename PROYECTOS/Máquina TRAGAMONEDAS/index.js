window.onload=inicio 
var credito=Math.floor(Math.random()*4)+9
var imagenes=["bombum.png","espejo.png","gorra.png","llavero.png","sacapuntas.png","tenedor.png"]
var premios=[3,2,3,2,3,2]
var numeros_actualizar=[]


function inicio() {
    document.getElementById("tirar").onclick=Tirar_Inicio
}

function Tirar_Inicio() {
    numeros_actualizar=[]
    for (let k = 0; k < document.getElementsByClassName("botonAbajo").length; k++) {
        numeros_actualizar.push(escojer_numero())
    }
    alert(numeros_actualizar)
}
function lanzar_uno() {
    
}
function escojer_numero() {
    var azar=Math.floor(Math.random()*imagenes.length)
    return azar
}
function mostrar_imagen() {
    
}
function comparar() {
    
}
function actualizar() {
    
}
function mostrar_mensaje() {
    
}
function cerrar() {
    
}
function sonidos() {
    
}