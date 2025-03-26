const contenedor = document.getElementById('contenedor');
let boton = document.querySelector("#gBtn");


boton.addEventListener("click", tirarDados);

function tirarDados(){
  const cantidadImagenes = 2; // Número de imágenes que deseas generar

  for (let i = 1; i <= cantidadImagenes; i++) {
    generarDado()
    generarDado()
  }
}

function generarDado(){
  let num=randomItem();
  contenedor.innerHTML += `<img src="imagen${num}.png" alt="Imagen ${num}" width="200">`;
}

function randomItem(){
  return Math.floor(Math.random()*6);
}