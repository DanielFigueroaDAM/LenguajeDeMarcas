const contenedor = document.getElementById('contenedor');
const cantidadImagenes = 2; // Número de imágenes que deseas generar

for (let i = 1; i <= cantidadImagenes; i++) {
  contenedor.innerHTML += `<img src="imagen${i}.png" alt="Imagen ${i}" width="200">`;
}