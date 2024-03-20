var dinero = 1
var cambio = 4229.45

function convertir(a, b) {
    let resultado= a*b;
    return resultado
}

function iniciar_convercion() {
    cambio = document.querySelector("#cambio").value
    dinero = document.querySelector("#dinero").value;
    //dinero = document.querySelector("dinero").value; = agarra el valor escrito en el input y lo agrega a la variable dinero
   recibo=convertir(dinero,cambio)
    console.log(recibo + "col este es el resulado de cambiar peso colombiano a euro")
    document.querySelector("#conversines").innerHTML += `${dinero} euros son ${recibo} pesos colombianos <br>`
}

window.onload = inicio;

function inicio() {

    document.querySelector("#convertir").onclick = iniciar_convercion
    document.querySelector("#cambio").value = cambio
}
