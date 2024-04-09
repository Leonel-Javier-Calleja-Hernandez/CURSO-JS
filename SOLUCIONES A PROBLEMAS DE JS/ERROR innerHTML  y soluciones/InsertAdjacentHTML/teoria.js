const CAJA= document.querySelector(".caja");
for (let k = 0; k < 10; k++) {
    CAJA.insertAdjacentHTML("beforeend",`<button>Boton${k+1}</button>`);
    document.querySelectorAll("button")[k].addEventListener("click",saludar)
    
}

function saludar() {
    alert("hola que tal :3");
}
