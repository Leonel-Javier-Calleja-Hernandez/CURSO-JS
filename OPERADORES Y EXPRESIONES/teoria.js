// 👉DE ASIGNACION

// 1
/*
var x = 10
x += 2;
alert(x + " suma")
x -= 2
alert(x + " resta")
x /= 2
alert(x + " division")
x *= 2
alert(x + " multiplicar")
x %= 4
alert( x +" lo que resta de la division 10/4 = 2")
x = 10
x **= 2
alert(x + " la potenciacion de 10**2")
*/

// 2
/*
$a = "3"
$signo = "+"
$b = "1"
$resultado = ""
$resultado+=$a+=$signo+=$b

alert(typeof($a) + " ES LO MISMO QUE " + $a)

alert($resultado)
*/
// 👉ARITMETICOS

// al poner el "+" o e l "-" al inicio de la variable y despues de igual, si es texto se combierte en numero si es posible
// positivo
/*
$a = "6"
alert("con el +$a " + typeof($a) + " es texto " + $a) 
$b = +$a
alert(typeof($b) + " se combirtio en numero " + $b) 
// negativo
$a = "6"
alert("con el -$a " +typeof($a) + " es texto " + $a) 
$b = -$a
alert(typeof($b) + " se combirtio en numero " + $b) 
*/

// 👉INCREMENTO
// 1. si estandespues de el nombre de la variable debuelve el valor antes de incrementarlo o reducirlo
// 2. si estan al inicio ++ o -- a la variable le incrementa o le disminuye 
// 3. de string a numero con el ++ 0 -- al inicio 

// Ej 1: 
/*
a = 5
alert("este es el Ej 1: "+ a + " es 5")
b = a++
alert(b +" (a es 5 pero le sumo 1 al despues)" )
alert (a)

// Ej 2: 

a = 5
alert("este es el Ej 2: " + a + " es 5")
b = ++a
alert(b +" (a es 5 pero le sumo 1 al a al inicio)" )
alert (a)

// Ej 3: 

a = "6"
alert("este es el Ej 3: a es igual: " + a)
b = ++a + 1
//++a de string lo convierte a numero
alert ("b = ++a + 1 es igual a: "+b)
alert ("a es igual a: "+a) 
*/
// 👉DE COMPARACION
/*
let a = "5";
let b = 5
alert("a==b : solo es valor")
alert(a==b)
alert("a===b : el valor y el tipo sea string, numerico, booleano..." )
alert(a===b)
alert("a!=b : diferente valor")
alert(a!=b)
alert("a!==b : diferente valor y tipo")
alert(a!==b)
*/
// 👉 TERNARIO
/*
// Ej 1:

let nota = 5
let resultado = (nota<5) ? "has suspendido": "has aprobado"
// (nota<5)= condicion ?= el valor que hay depues de ? se le asigna a resultado
//si la condicion se cumple = "has suspendido"
//: = sino  "has aprobado"
alert(resultado)

//Ej 2:

let tarea = 7
let tarea_listo = (tarea>5)? "no alcansarea a terminar las tareas :(" : "alcansarea aterminar las tareas :) " 
alert(tarea_listo)

// Ej 3 :

let miDinero = 10
let Producto = 100
let moneda = "col"
let solucion = (miDinero>=Producto)?"puedes comprar el Producto te sobran " + (Producto - miDinero) + moneda : "no puedes comprar el producto te faltan " + (miDinero - Producto) + moneda
 alert(solucion)

 // Ej :

 $bateria = 10
 cargar = 15
 jugar = ($bateria>=cargar)? "puedes jugar": "cargar el celular"
 alert(jugar)
 */
// LOGICOS 👇
// &&
/*
let edad = 14
let vivo = true
let resultado = (edad >= 18 && vivo == true)? " puedes votar " : "no puedes votar" 
alert(resultado)
*/
// ||
/*
let edad = 19
let vivo = true
let resultado = (edad < 18 || edad > 100)? "no puedes votar " : "puedes votar" 
alert(resultado)
*/
// !
let edad = 19
let vivo = true
let resultado = (!vivo)? "no puedes votar " : "puedes votar" 
alert(resultado)