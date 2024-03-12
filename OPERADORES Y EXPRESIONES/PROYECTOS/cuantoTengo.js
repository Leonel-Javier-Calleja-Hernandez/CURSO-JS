let miDinero
let valorProducto
let resultado
let moneda = prompt("cual es la moneda de tu pais")
let elBotonMidinero = document.getElementById("clikMiDinero")
let seccionReiniciar = document.getElementById("ReiniciarPagina")
let botonReiniciar = document.getElementById("botonReinicio")
let parrafoBotonInicio = document.getElementById("parrafoBotonInicio")
inicio()


function inicio() {

elBotonMidinero.addEventListener('click',BotonMidinero)

seccionReiniciar.style.display="none"
}

function BotonMidinero() {
    miDinero = prompt("Cuanto Dinero Tengo?")
    valorProducto = prompt("Cuantos Valor de el producto")
    crearParrafos()
}
function crearParrafos() {
    elBotonMidinero.style.display="none" 
    parrafoBotonInicio.style.display="none" 
    seccionReiniciar.style.display="flex" 

    let parrafoMidinero = document.getElementById("miDinero") 
    parrafoMidinero.innerHTML

    let parrafoValorProducto = document.getElementById("valorProducto") 
    parrafoValorProducto.innerHTML

    let parrafoResultado = document.getElementById("Resultado") 
    parrafoResultado.innerHTML


    let parrafo = document.createElement("p")
    parrafo.innerHTML = `Mi dinero = ${miDinero} ${moneda}`

    let parrafo2 = document.createElement("p")
    parrafo2.innerHTML = `El valor de el producto = ${valorProducto} ${moneda}`


    parrafoMidinero.appendChild(parrafo)
    parrafoValorProducto.appendChild(parrafo2)

    
let faltaDinero = miDinero-valorProducto
resultado = (miDinero<valorProducto)? `tienes ${miDinero} ${moneda} y te falta ${faltaDinero} ${moneda}`: `te sobra dinero tienes ${miDinero} ${moneda} y te sobra ${faltaDinero} ${moneda}`

    let parrafo3 = document.createElement("p")
    parrafo3.innerHTML = resultado

    parrafoResultado.appendChild(parrafo3)


    botonReiniciar.addEventListener('click',reiniciarPagina)

console.log(resultado)
console.log(faltaDinero)
}
 function reiniciarPagina() {
    location.reload()

 }


