// FUNCIONES

// 1 = llamando una funtion 
/*
function saludar() {
    alert("Hola")
}
saludar()
*/
// 2 = introduciendo datos a la funtion y la interpolacion
/*
function saludar(nombre, numero) {
    alert(`Hola ${nombre} ${numero}`)
}
// se le puede mandar datos para enviarlo a la funtion
saludar("leonel",12)
saludar("daniel",32)
saludar("angel",14)
*/
// 3 = Devolver un dato de una funtion con "return r" y lo pasa al el valor de resultado
/*
function saludar(nombre, numero) {
    r=(`Hola ${nombre} ${numero}`)
    return r
}
let resultado=saludar("leonel",12)
alert (resultado)
*/
// 4 = tambie se puede agregar solo el return en vez de crear el let, pero solo al llamar la funtion vuelve lo que tenga el return y nada mas
/*
function saludar(nombre, numero) {
    return (`Hola ${nombre} ${numero}`)
}
let resultado=saludar("leonel",12)
alert (resultado)
*/
// LOS ANTERIORES EJERCICIOS SOLO SE INICIAN AL CARGAR LA PAGINA Y POR ENDE SE CREEARAN LOS EVENTOS

//EVENTOS

function saludar(nombre, numero) {
    return (`Hola ${nombre} ${numero}`)
}

function iniciar() {
    let resultado=saludar("leonel",12)
    alert (resultado)
}
function listoTodo(){
    document.getElementById("botonEvento1").onclick = iniciar
    document.getElementById("botonIrPaginaVariablesTeoria").onclick = Ir_a_pagina_wed
}
function Ir_a_pagina_wed() {
    location.href = "file:///C:/Users/USER/Desktop/PROYECTOS%201/LAS%20VARIABLES/teoria.html"
}
window.onload = listoTodo
