const nombreJugador1 = " leonel "
const nombreJugador2 = " javier "
const nombreJugador3 = " calleja "

var jugador = 1

function iniciarJuego(){
    alert("HOLA INICIAMOS")
    let siguiente = document.getElementById("siguiente")
    siguiente.addEventListener('click',preparate)
    
    
}
function preparate() {
    alert("PREPARATE")
    cadena()
}

function cadena(){
alert("Inicia el " + jugador)
crearMensaje()
}

function crearMensaje(){
    let Mensajes = document.getElementById("MENSAJES")

    let parrafo =document.createElement('p')
    parrafo.innerHTML= "el jugador "+ nombreJugador1 +" "+ jugador


    //con Mensajes.appendChild(parrafo) se le invica a el html que por ".appendChild" inserte un "parrafo" que sea creado en cadena.js
    Mensajes.appendChild(parrafo)
    MensajeFinal()
}
function MensajeFinal() {

    let MensajesFin = document.getElementById("FIN")
    let parrafo =document.createElement('p')

    parrafo.innerHTML= "FIN DE EL JUEGO"

    MensajesFin.appendChild(parrafo)
    console.log(MensajeFinal)
}

window.addEventListener('load', iniciarJuego)