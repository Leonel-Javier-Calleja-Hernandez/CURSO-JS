window.onload = iniciar;

function iniciar() {
    document.getElementById("texto").onclick = cambiarColor

    
}
function cambiarColor() {
    let texto = document.getElementById("texto").style
    texto.color = "red"
    texto.backgroundColor ="blue"
   
}

