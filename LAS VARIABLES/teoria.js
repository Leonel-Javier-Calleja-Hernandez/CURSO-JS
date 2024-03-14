// 1 = se crea una variable con valor=18 y luego se llama la funtion sumar en esta funtion se muestra por medio de un alert el valor de edad que continua siendo 18. pero luego al cambiar le la edad=20 su valor, luego de acabar la funtion "}" cambia y se combierte es 20

/* var edad = 18;
 sumar ();
 function sumar() {
 alert(edad)
     edad = 20;
 }
 alert(edad);
*/


// 2 = se crea una variable con valor=18 y luego se llama la funtion sumar en esta funtion se crea un alert en el cual es undefined ya que en esa funtion se acreado un var que solo afecta en esa funtion y pues como la hemos creado antes de que se creara. ocurre este error ya despues si se crea la variable edad = 20, al finaliza la funtion se creea "alert(edad);" pero en este caso no a cambiado el valor original ya que 20 estaba en solo esa funtion y entonses 18 no a cambiado.

/*var edad = 18;
sumar ();
function sumar() {
alert(edad)
var edad = 20;
}
alert(edad);
*/

// 3 = se crea una variable con valor=18 y luego se a creado un na comprobacion que seria ("edad es igaul a 18 if es true (sierto) entonse{}") por eso si cumple la condicion.dentro de ella se cambia el valor de edad por 18 y por el alert se muestra 20.al acabar la funtion } se crea otro alert que mantiene el valor cambiado osea edad=20 

/*var edad = 18;
if(true){
    edad = 20
    alert("la edad es " + edad)
}
alert("si es " + edad);

var numero = 10
if (true){
    numero = 100
    alert("el numero es " + numero)
}
alert ("si es " + numero)*/


// NOTAS-TEXTO

/*var A = 1
var B = 2
var C = A + B
let resultado =[]
console.log(C + " C es numero")
alert("el resultado de A + B es " + C)
cambiarATexto()

function cambiarATexto() {
    A = "hola-"
    C = A + B
    alert("se cambio A y entonses C es texto" + C)
    resultado = C
    console.log(resultado)
    B = C + A
    console.log(B)
}*/


//var EJEMPLO

/*var hola = "hola"
combiarIngles()

function combiarIngles() {
  var hola = "hello"
  alert(hola)  
}
alert(hola)*/

//let ejemplo
 /*let hola ="hola"
 if (true){
    let hola ="hello"
    alert(hola)
 }
 alert(hola) 
*/


//const EJEMPLO

/*const hola = "hola"
hola = "hello"
*/
// el anterior da error por que las const no se pueden cambiar el valor


//  SABER EL TIPO DE VARIABLE CON 

// EJEMPLO :
/*    let a = "hol"
    let b = 4
    let c = a + b
    console.log(typeof(c)) 
*/    

// INTERPOLACION EJEMPLO

let nombre = "Leonel Javier Calleja Hernandez"
let edad = 18
let año = 2024
let mostrarEmogi
let Mensaje = `hola mi nombre es ${nombre} y tengo ${edad} , estoy en el año ${año} y este es mi emogi favorito = ${emogi(mostrarEmogi)}`
alert(Mensaje)
MensajeHola()

function emogi(a) {
    let elEmogi = a ="😁"
    return elEmogi
    
}

function MensajeHola(){
    let MensajeHolaId = document.getElementById('hola')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = `hola ${nombre}`

    MensajeHolaId.appendChild(parrafo)
    console.log(parrafo);
}
document.getElementById("irOperadoresYExpresiones").onclick = irPaginaOperadorYExpresiones

function irPaginaOperadorYExpresiones() {
    location.href="file:///C:/Users/USER/Desktop/PROYECTOS%201/OPERADORES%20Y%20EXPRESIONES/teoria.html"
}

//string



