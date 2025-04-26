//Sacar número random
function numeroRandom() {
  return Math.floor(Math.random() * 100) + 1;
}
//Comprobar el número
function reiniciarSitioWeb() {
  setTimeout(() => {
    location.reload();
  }, 2000);
}
//recoger datos por un imput
function recogerDatos() {
  const input = document.querySelector(".input");
  const datoIngresado = document.getElementById("nombre").value;
  console.log(datoIngresado);
  // si quieres vacial lo que hay en el imput
    input.value = "";

}
let btn=document.getElementById("btn");
btn.addEventListener("click", recogerDatos);


// recoger datos y elementos de una lista
//listaCompra.js 

