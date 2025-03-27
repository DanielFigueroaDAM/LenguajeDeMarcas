const contenedor = document.getElementById('contenedor');
let boton = document.querySelector("#gBtn");
var cantidad = document.querySelector("#cantidad");


boton.addEventListener("click", tirarDados);

function tirarDados(){
  contenedor.innerHTML = '';
  const cantidadImagenes = parseInt(cantidad.value);
  for (let i = 1; i <= cantidadImagenes; i++) {
    generarDado()
  }
}

function generarDado(){
  let num=randomItem();
  contenedor.innerHTML += `<img id="dado_generado" src="dado${num}.png" alt="Dado ${num}" width="300">`;
}

function randomItem(){
  return Math.floor(Math.random() * 6) + 1;
}
