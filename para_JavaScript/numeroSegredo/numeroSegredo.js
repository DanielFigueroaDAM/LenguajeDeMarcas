// numeroSegredo.js
function numeroRandom() {
  return Math.floor(Math.random() * 100) + 1;
}

function comprobarNumero() {
  const numeroIngresado = Number(document.getElementById("guess").value);
  const aleatorio = numeroRandom();
  if (numeroIngresado === aleatorio) {
    mostrarMensaje("¡Ganaste! 🎉", 5000);
  } else {
    mostrarMensaje("Perdiste. El número era " + aleatorio + " 😢", 5000);
  }
  //reiniciar el sitio web
  setTimeout(() => {
    location.reload();
  }, 2000);

}

function mostrarMensaje(texto, duracion = 5000) {
  const panel = document.getElementById("mensaje");
  panel.textContent = texto;
  panel.classList.add("show");
  setTimeout(() => panel.classList.remove("show"), duracion);
}

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  comprobarNumero();
});
