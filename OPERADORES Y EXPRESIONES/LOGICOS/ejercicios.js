var numero1 = 12233
var numero2 = "12233"

comparar = (numero1===numero2&&numero2==numero1) ?"son iguales ":"son diferentes"
alert(comparar)

var N1 = 1
var N2 = 1
var N3 = "1"
var escribirN= "true"
var tienerDedos = "false"
alert(N1&&N2 == N3)
alert(N1&&N2 === N3)
alert(N1||N2 == N3)

mostrar = (!escribirN == false)?"puedes escribir": "no puedes escribir"

alert(mostrar)

mostrar2 = (!tienerDedos)?"tienes dedos":"no tiener dedos"
alert(mostrar2)