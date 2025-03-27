const contenedor = document.getElementById('contenedor');
let boton = document.querySelector("#gBtn");
var cantidad = document.querySelector("#cantidad");

var modSuma=document.querySelector("#suma")

var suma=0;


boton.addEventListener("click", tirarDados);

function tirarDados(){
  contenedor.innerHTML = '';
  suma=0;
  const cantidadImagenes = parseInt(cantidad.value);
  for (let i = 1; i <= cantidadImagenes; i++) {
    generarDado()
  }
  modSuma.innerHTML=suma;
}

function generarDado(){
  let num=randomItem();
  contenedor.innerHTML += `<img id="dado_generado" src="dado${num}.png" alt="Dado ${num}" width="300">`;

}

function randomItem(){
  let randomz= Math.floor(Math.random() * 6) + 1;
  suma=suma+randomz;
  return randomz
}
function mostrarSuma(){
  return suma;
}