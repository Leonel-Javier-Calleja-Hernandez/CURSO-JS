const nombreJugador1 = " LEONEL "
const nombreJugador2 = " JAVIER "
const nombreJugador3 = " CALLEJA "

var jugador = 1


function iniciarJuego(){
    let siguiente = document.getElementById("iniciar")
    siguiente.addEventListener('click',cadena)

    let Mensajes = document.getElementById("MENSAJESInicio")

    let parrafo =document.createElement('p')
    parrafo.innerHTML= "HOLA INICIAMOS 👇"

    Mensajes.appendChild(parrafo)

    let pestañaInicio = document.getElementById("pestañaInicio")
    pestañaInicio.style.display = 'none' 

    let MENSAJESFinal = document.getElementById("MENSAJESFinal")
    MENSAJESFinal.style.display = 'none' 

    let pestañaSaludo = document.getElementById("pestañaSaludo")
    pestañaSaludo.style.display = 'flex' 
    // pestañaSaludo.style.display = 'flex' 
   
}


function cadena(){

    let pestañaInicio = document.getElementById("pestañaInicio")
    pestañaInicio.style.display = 'flex' 

    let pestañaSaludo = document.getElementById("pestañaSaludo")
    pestañaSaludo.style.display = 'none' 

    let jugadorNumero = document.getElementById('jugador').textContent = jugador
    jugadorNumero = jugador

    let siguiente = document.getElementById("siguiente")
    siguiente.addEventListener('click',crearMensaje)
    console.log(jugador)
}
function preparate() {
    alert("PREPARATE")
    // cadena()
    crearMensaje()
}

function crearMensaje(){

    let Mensajes = document.getElementById("MENSAJES")

    let parrafo =document.createElement('p')
    parrafo.innerHTML= "El jugador "+ nombreJugador1 +" "+ jugador

    Mensajes.appendChild(parrafo)
   
    if(jugador === 1 ){
        let parrafo =document.createElement('p')
        parrafo.innerHTML= "EL ULTIMO JUGADOR ES "+ nombreJugador1 +" TOCA SIGUIENTE 🙃 PARA CONTINUAR"

        Mensajes.appendChild(parrafo)

        let siguiente = document.getElementById("siguiente")
        siguiente.addEventListener('click',cambiarJugadorDos)

       

    }else{
        return;
    }
    
    
 console.log(jugador)
 console.log(parrafo)
//  alert("fin")

}

function cambiarJugadorDos() {
    jugador = 2

    let jugadorNumero = document.getElementById('jugador').textContent = jugador
    jugadorNumero = jugador

    let Mensajes = document.getElementById("MENSAJES")

    let parrafo =document.getElementById("MENSAJES")
    parrafo.innerHTML= "El jugador "+ nombreJugador2 +" "+ jugador

    
    if(jugador === 2 ){
        let parrafo =document.createElement('p')
        parrafo.innerHTML= "EL ULTIMO JUGADOR ES "+ nombreJugador2 +" TOCA SIGUIENTE 🙃 PARA CONTINUAR"

        Mensajes.appendChild(parrafo)

        let siguiente = document.getElementById("siguiente")
        siguiente.addEventListener('click',cambiarJugadorTres)



    }else{
        return;
    }
}

function cambiarJugadorTres() {
    jugador = 3

    let jugadorNumero = document.getElementById('jugador').textContent = jugador
    jugadorNumero = jugador

    let Mensajes = document.getElementById("MENSAJES")

    let parrafo =document.getElementById("MENSAJES")
    parrafo.innerHTML= "El jugador "+ nombreJugador3 +" "+ jugador

    
    if(jugador === 3 ){
        let parrafo =document.createElement('p')
        parrafo.innerHTML= "EL ULTIMO JUGADOR ES "+ nombreJugador3 +" TOCA SIGUIENTE 🙃 PARA CONTINUAR"

        Mensajes.appendChild(parrafo)

        let siguiente = document.getElementById("siguiente")
        siguiente.addEventListener('click',MensajeFinal)



    }else{
        return;
    }
}

function MensajeFinal() {

    let pestañaInicio = document.getElementById("MENSAJESFinal")
    pestañaInicio.style.display = 'flex' 

    let pestañaSaludo = document.getElementById("pestañaInicio")
    pestañaSaludo.style.display = 'none' 

    let MensajesFin = document.getElementById("FIN")

    let parrafo =document.createElement('p')

    parrafo.innerHTML= "FIN DE EL JUEGO"

    let siguiente = document.getElementById("reiniciar")
    siguiente.addEventListener('click',reiniciar)
   
    let MensajesPFin = document.getElementById("MENSAJEPersonajeFinal")

    let parrafoFP =document.createElement('p')
    parrafoFP.innerHTML= `El ultimo jugador fue ${nombreJugador3} con el numero ${jugador}`
    
    MensajesPFin.appendChild(parrafoFP)
    MensajesFin.appendChild(parrafo)
    console.log(MensajeFinal)

}
function reiniciar(){
    
    location.reload()
}

window.addEventListener('load', iniciarJuego)