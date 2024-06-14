window.onload=inicio;
var credito=Math.floor(Math.random()*4)+9
var imagenes=["bombum.jpeg","espejo.jpeg","gorra.jpeg","llavero.jpeg","sacapunta.jpeg","tenedor.jpeg"];
var premios=[3,2,3,2,3,2];
var numeros_actuales=[];
var au;

function inicio() {
    document.getElementById("tirar").onclick=Tirar_Inicio
    document.getElementById("x").onclick=cerrar
    au=document.querySelector("#sonido");
}

function Tirar_Inicio() {
    numeros_actuales=[]
    // document.getElementsByClassName("botonAbajo").length lo que hace es buscar la cantidad de veces que la class botonAbajo esta en
    for (let k = 0; k < document.getElementsByClassName("botonAbajo").length; k++) {
        //va a la funtion esccojer_numero y pienza un numero y lo introduce dentro de el array numeros_actulales
        numeros_actuales.push(escojer_numero())
        mostrar_imagen(k,numeros_actuales[k])
    }
    comparar()
}
function lanzar_uno() {
    
}
function escojer_numero() {
    // pensara un numero entre la cantidad de elementos que hay en el array imagenes y lo devuelve con return
    var azar=Math.floor(Math.random()*imagenes.length)
    return azar
}
function mostrar_imagen(num,img) {
    console.log(num,img)
    // busca en el documento la class imagen y dentro de el que cambie el src de esta imagen y le agrega una de las imagenes de el array imagenes
    document.getElementsByClassName("imagen")[num].getElementsByTagName("img")[0].src="img/" + imagenes[img];
}
function comparar() {
    if(numeros_actuales[0]==numeros_actuales[1]&&
        numeros_actuales[1]==numeros_actuales[2]
    ){
        let p = premios[numeros_actuales[0]]
        let mensaje=`HAS GANADO ${p} MONEDAS <div>`;
        for (let k = 0; k < p; k++) {
            mensaje+=`<img src="img/monedas.png">`
            
        }
        mensaje+="</div>"
        mostrar_mensaje(mensaje)
        sonidos("victory_sJDDywi.mp3")
    }
}
function actualizar() {
    
}
function mostrar_mensaje(m) {
    document.getElementById("velo").style.display="block";
    document.getElementById("mensaje").innerHTML=m;
}
function cerrar() {
    document.querySelector("#velo").style.display="none"
    au.pause();
}
function sonidos(audio) {
    au.src="sound/" + audio;
    au.play();
}