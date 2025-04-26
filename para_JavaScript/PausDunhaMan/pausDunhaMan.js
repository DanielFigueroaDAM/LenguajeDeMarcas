
var palos = ["copa", "oro", "basto", "espada"];
var baraja = [];
var contador = 1;
function vaciarBaraja() {
    baraja = [];
    contador = 1;
}

function generarBaraja() {
    vaciarBaraja();
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
            } else if (j == 8) {
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
    contadorOro = 0;
    contadorCopa = 0;
    contadorBasto = 0;
    contadorEspada = 0;

}
generarBaraja();
const btn = document.getElementById('generateBtn');
let contenedor = document.getElementById('contenedor');

function generarManoDe7() {
    // Limpiamos mano anterior
    for (let i = 0; i < 7; i++) {
        let carta = randomItem(baraja);
        document.getElementById('cardImage' + i).src = carta.ruta;
        document.getElementById('cardImage' + i).alt = carta.nombre;
        contarPalos(carta);
        borrarCarta(carta);

    }
    generarBaraja();

}
var contadorOro = 0;
var contadorCopa = 0;
var contadorBasto = 0;
var contadorEspada = 0;
function contarPalos(carta){

        if (carta.palo === "oro") {
            contadorOro++;
        } else if (carta.palo === "copa") {
            contadorCopa++;
        } else if (carta.palo === "basto") {
            contadorBasto++;
        } else if (carta.palo === "espada") {
            contadorEspada++;
        }
    document.getElementById('oros').innerHTML = contadorOro;
    document.getElementById('copas').innerHTML = contadorCopa;
    document.getElementById('bastos').innerHTML = contadorBasto;
    document.getElementById('espadas').innerHTML = contadorEspada;

}

// Cada vez que se pulsa el botón, generamos una nueva mano
btn.addEventListener('click', generarManoDe7);

function borrarCarta(carta) {
    let index = baraja.indexOf(carta);
    if (index > -1) {
        baraja.splice(index, 1);
    }

}

function cambiarImagen() {
    document.getElementById('cardImage').src = randomItem(baraja).ruta;
    document.getElementById('cardImage').alt = randomItem(baraja).nombre;
}



function randomItem(array) {
    return array[(Math.floor(Math.random() * array.length))];
}


