
let palos = ["copa", "oro", "basto", "espada"];
let baraja = [];
let contador = 1;

for (let i = 0; i < palos.length; i++) {
  for (let j = 1; j <= 10; j++) {
    let carta = "";
    if (j === 1) {
      carta = "As";
    } else if (j >= 2 && j <= 7) {
      carta = j.toString();
    } else if (j === 9) {
      carta = "Caballo";
    } else if (j === 10) {
      carta = "Rey";
    }else if (j==8){
      carta = "Sota";
    }
    let carpetaPalo = palos[i].charAt(0).toUpperCase() + palos[i].slice(1);

    let cartaObj = {
      id: contador,
      numero: j,
      palo: palos[i],
      ruta: "pixelDeck/" + carpetaPalo + "/" + palos[i] + j + ".png",
      nombre: carta
    };
    baraja.push(cartaObj);
    contador++;
  }
}

console.log(baraja);


let boton = document.querySelector("#generateBtn");

document.getElementById('cardImage').src = randomItem(baraja).ruta;
document.getElementById('cardImage').alt = randomItem(baraja).nombre;

// Agrega el evento click al botón
boton.addEventListener("click", cambiarImagen);

function cambiarImagen(){
document.getElementById('cardImage').src = randomItem(baraja).ruta;
document.getElementById('cardImage').alt = randomItem(baraja).nombre;
}



function randomItem(array){
return array[(Math.floor(Math.random()*array.length))];
}


