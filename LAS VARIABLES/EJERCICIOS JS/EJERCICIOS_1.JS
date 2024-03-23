let numero = prompt("hola ingresa un numero ")
alert (`Hola el numero es ${numero}`)


function calcularArea(a, b) {
    calcular = a*b
    return calcular
}
alert ("el area de el cuadrado es de  " +calcularArea(5,5))


function calcularAreaCuabrado() {
    let lados = prompt("lados ")
    calcular = Math.pow(lados,2)
    return calcular
}
alert ("el area de el cuadrado es de  " +calcularAreaCuabrado())

let edad = prompt("tu edad ")
let emogi=(edad==50>edad==100)?", estas 👴":", estas 🧑‍🦰"
alert(`tienes ${edad} años ${emogi}`)

let uno = 1
let numeroEnAumento = prompt("numero ")
function aumentar() {
numeroEnAumento++
alert("ahorra es " + numeroEnAumento)
    
}
function disminuer() {
    --numeroEnAumento
    alert("ahorra es " + numeroEnAumento)
}
aumentar()
aumentar()
disminuer()
disminuer()
disminuer()
aumentar()
aumentar()
aumentar()
aumentar()
disminuer()