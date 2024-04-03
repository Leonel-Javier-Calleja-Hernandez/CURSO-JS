var a = "3"
var signo = "+"
var b = "1"
var resultado = "" 
resultado+=a+=signo+=b
alert("se concateno +=a+=signo+=b 👇\n" + resultado)

var numero1 = 1
var numero2 = 2
var operacion =""
operacion-=numero1-=numero2
alert(`la operacio es ${operacion}`)

var  numero3 = 10
numero3/=5
alert(numero3)
sumarEnFuntion(numero3)
function sumarEnFuntion(N3) {
    let numero2 = 20
    operacion = N3/=numero2
    alert(`el numero2 es un let vale ${numero2} se eliminara despues de salir de la funtion y operacion es ${operacion}`)
}
alert(`el numero2 vale ${numero2}`)