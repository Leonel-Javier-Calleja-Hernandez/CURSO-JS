const nombreJugador1 = " leonel "
const nombreJugador2 = " javier "
const nombreJugador3 = " calleja "

var jugador = 1

function iniciarJuego(){
    // alert("HOLA INICIAMOS")
    let siguiente = document.getElementById("iniciar")
    siguiente.addEventListener('click',preparate)
    let Mensajes = document.getElementById("MENSAJESInicio")

    let parrafo =document.createElement('p')
    parrafo.innerHTML= "HOLA INICIAMOS"

    Mensajes.appendChild(parrafo)

    let pestañaInicio = document.getElementById("pestañaInicio")
    pestañaInicio.style.display = 'none' 
    let pestañaSaludo = document.getElementById("pestañaSaludo")
    pestañaSaludo.style.display = 'block' 
    // pestañaSaludo.style.display = 'flex' 
   
}
function preparate() {
    alert("PREPARATE")
    cadena()
}

function cadena(){
    let pestañaInicio = document.getElementById("pestañaInicio")
    pestañaInicio.style.display = 'block' 
    let pestañaSaludo = document.getElementById("pestañaSaludo")
    pestañaSaludo.style.display = 'none' 
    // sectionSeleccionarAtaque.style.display = 'block' 
    let siguiente = document.getElementById("siguiente")
    siguiente.addEventListener('click',preparate)
    
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