const numero_De_Orejas = 2


var puntos
var telefono
var DNI
var leonelJavierCalleja = true
var TRESAficiones =[18,"leonel javier calleja hernandeZ","futbol","youtube","programar"]
var resultado = leonelJavierCalleja * telefono
alert(resultado)

function miNombre() {
    telefono = "numero de suscriptores YOSERLeo = "
    var nombre = "leonel javier callejas hernandez"
    var variableLocal = null
    DNI = "10l"
}

if (true) {
    edad = 18
}
alert (`hola mi nombre es ${leonelJavierCalleja} y mi edad ${edad} 😁😁😀`)

console.log(`Hola ${leonelJavierCalleja}, tu primera afición es ${TRESAficiones[3]} y la última es ${TRESAficiones[2]}.`)

var tiposDeDatos = console.log(typeof(edad))
convertirAParrafo()

function convertirAParrafo() {
    let edadId = document.getElementById("edad")
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = `hola soy ${TRESAficiones[1]} la edad  mi edad es de ${edad} me gusta el ${TRESAficiones[2]} y tambien ${TRESAficiones[3]} y la respuesta es imposible => ${resultado} 😁😁😁`
    
    edadId.appendChild(parrafo)
}
