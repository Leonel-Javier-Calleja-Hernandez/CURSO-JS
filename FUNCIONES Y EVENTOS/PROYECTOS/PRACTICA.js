window.onload = inicio
function inicio() {
    alert("hola")
    document.getElementById("cosa").onclick = cambiarColor;
    document.getElementById("letras").onclick = cambiarColor;
    }
function cambiarColor() {
    let idCosa = document.getElementById("cosa").style
    let idLetras = document.getElementById("letras").style

    idCosa.color ="red";
    idCosa.backgroundColor ="blue"
    idCosa.border ="4px dotter green"

    idLetras.color= "green"
    idLetras.backgroundColor="red"
    idLetras.border ="black"
}
