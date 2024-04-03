var numero = 1

alert(numero+1)

alert(numero-10)

alert(numero/4)

alert(numero*4)

var cambiarAT = "1"
alert("al poner le el + al inicio de la var pasa de ser tipo texto a numero" + cambiarAT)
alert(+cambiarAT + " es de tipo " + typeof(+cambiarAT))
alert(+cambiarAT+6 + "es de tipo " + typeof(+cambiarAT))

var tipoTexto ="hola"
alert(+tipoTexto+13292+" es de tipo " +  isNaN(tipoTexto))

var valor =  parseInt(prompt("Escribe algo cualquier cosa"))

alert(`el valor es ${valor} tipo ${typeof(valor)}`)

valor = (Number.isInteger(valor))?alert("es un numero"): alert("es texto")