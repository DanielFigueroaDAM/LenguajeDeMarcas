// Elementos del DOM
const input = document.querySelector(".nuevoElemento");
const btnAñadir = document.getElementById("boton");
const btnReset = document.getElementById("resetear");
const lista = document.getElementById("lista");

// Función que añade el dato a la lista
function recogerDatos() {
  const datoIngresado = input.value.trim();
  if (!datoIngresado) return;            // no añadir vacíos
  lista.innerHTML += `<li>${datoIngresado}</li>`;
  input.value = "";                      // limpiar input                       // volver a enfocar
}

// Función que borra todos los ítems
function borrarDatos() {
  lista.innerHTML = "";
}

// Evitar que Enter recargue la página y en su lugar llame a recogerDatos()
input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    recogerDatos();
  }
});

// Botón Añadir y Resetear
btnAñadir.addEventListener("click", recogerDatos);
btnReset.addEventListener("click", borrarDatos);
