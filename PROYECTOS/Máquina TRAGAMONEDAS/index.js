window.onload=inicio;
var credito=Math.floor(Math.random()*4)+9
var imagenes=["bombum.jpeg","espejo.jpeg","gorra.jpeg","llavero.jpeg","sacapunta.jpeg","tenedor.jpeg"];
var premios=[3,2,3,2,3,2];
var numeros_actuales=[];
var au;
var activos=false

function inicio() {
    document.getElementById("tirar").onclick=Tirar_Inicio
    document.getElementById("x").onclick=cerrar
    au=document.querySelector("#sonido");
    for (let k = 0; k < document.getElementsByClassName("botonAbajo").length; k++) {
      document.getElementsByClassName("botonAbajo")[k].onclick=lanzar_uno
        
    }
    actualizar();
}

function Tirar_Inicio() {
    if (credito>0) {
        sonidos("salto-mario.mp3");
        activos=true;
    numeros_actuales=[]
    // document.getElementsByClassName("botonAbajo").length lo que hace es buscar la cantidad de veces que la class botonAbajo esta en
    for (let k = 0; k < document.getElementsByClassName("botonAbajo").length; k++) {
        //va a la funtion esccojer_numero y pienza un numero y lo introduce dentro de el array numeros_actulales
        numeros_actuales.push(escojer_numero())
        mostrar_imagen(k,numeros_actuales[k])
    }
    comparar()
}
}
function lanzar_uno() {
    sonidos("salto-mario.mp3");
    if (credito>0 && activos==true) {
    let hijos = this.parentNode.parentNode.children
    for (let k = 0; k < hijos.length; k++) {
        if(this.parentNode==hijos[k]){
            numeros_actuales[k]=escojer_numero(numeros_actuales[k]);
            mostrar_imagen(k,numeros_actuales[k]);
            comparar()
            break;
        }
    }
}
}
function escojer_numero(actual) {
    do{
        var azar=Math.floor(Math.random()*imagenes.length)
    }while (azar==actual) {
        return azar;
    }
    // pensara un numero entre la cantidad de elementos que hay en el array imagenes y lo devuelve con return
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
        activos=false
        let p = premios[numeros_actuales[0]]
        let mensaje=`HAS GANADO ${p} MONEDAS <div>`;
        for (let k = 0; k < p; k++) {
            mensaje+=`<img src="img/monedas.png">`
            
        }
        mensaje+="</div>"
        mostrar_mensaje(mensaje)
        sonidos("victory_sJDDywi.mp3")
        credito+=premios[numeros_actuales[0]];

    }
    credito--;
    actualizar()
}
function actualizar() {
    document.getElementById("monedas").innerHTML="";
    document.getElementById("dinero").innerHTML=credito
    for (let k = 1; k < credito; k++) {
       document.getElementById("monedas").innerHTML+=`
       <img src="./img/monedas.png" alt="">`
        
    }
    if (credito<1) {
        mostrar_mensaje(`<b>GAME OVER</b><div class="Mensaje_Perdiste">No te queda dinero :/</div>`)
    }
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