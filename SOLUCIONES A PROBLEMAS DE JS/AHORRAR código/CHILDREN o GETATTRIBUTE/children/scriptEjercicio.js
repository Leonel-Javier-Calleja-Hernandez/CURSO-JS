let personas=[
    {nombre:"LEONEL",edad:"19",colorFavorito:"rojo"},
    {nombre:"ANGEL",edad:"17",colorFavorito:"amarillo"},
    {nombre:"DANIEL",edad:"18",colorFavorito:"azul"},
    {nombre:"SALOME",edad:"13",colorFavorito:"negro"},
]
function iniciar() {
    for (let k = 0; k < personas.length; k++) {
      document.querySelector("#caja").insertAdjacentHTML("beforeend",
      `<div class="informacion">
      <div class="nombre">${personas[k].nombre}</div>
      <div class="edad">la edad de ${personas[k].nombre} es ${personas[k].edad}</div>
      <div class="colorFavorito">y su color favorito es el ${personas[k].colorFavorito}</div>
      </div>`)
      document.querySelectorAll(".informacion")[k].onclick=mostrarMas
        
    }

}

function mostrarMas() {
  let hijos=this.parentNode.children;
  console.log(hijos)
  for (let k = 0; k < personas.length; k++) {
   if(this==hijos[k]){
    console.log(`este es el ${k}` )
    document.querySelector("#mostrar").innerHTML=`mi mombre es ${personas[k].nombre} y tengo ${personas[k].edad} , mi color favorito es el ${personas[k].colorFavorito}`
   }
    
  }
}
window.onload=iniciar