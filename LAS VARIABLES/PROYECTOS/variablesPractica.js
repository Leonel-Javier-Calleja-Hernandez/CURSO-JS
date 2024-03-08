const nombreJugador1 = " leonel "
const nombreJugador2 = " javier "
const nombreJugador3 = " calleja "

var jugador = 1


function mensajeFinal(){

    
    let MensajeId = document.getElementById("jugador")

    let parrafo =document.createElement('p')
    parrafo.innerHTML= `hola ${jugador}`

    MensajeId.appendChild(parrafo)

}


alert("el jugador "+ nombreJugador1 +" "+ jugador)
alert("Inicia el " + jugador)
cambiarJugadorDos()
function cambiarJugadorDos(){
    jugador = 2
    alert("el jugador "+ nombreJugador2 +" "+ jugador)
}
alert("Inicia el " + jugador)
cambiarJugadorTres()
function cambiarJugadorTres() {
    jugador = 3
    alert("el jugador " + nombreJugador3 +" "+ jugador)
}
alert("Inicia el jugador " + jugador)
if (true){
    let jugador = 4
    alert ("el jugador " + jugador + " no existe y ")
}
alert("Inicia el jugador " + jugador)
if (true){
    alert("reiniciar pagina ☺")
    mensajeFinal()
}

document.addEventListener('DOMContentLoaded',mensajeFinal)