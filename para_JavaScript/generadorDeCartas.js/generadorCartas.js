
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


    let barajaP = [];
    let contadorP = 1;
    let cartasExtras = ["J", "Q", "K"];
    let palosP = ["C", "D", "H", "P"]; 
    

    for (let j = 1; j <= 10; j++) {
      for (let i = 0; i < palosP.length; i++) {
        let carta = j.toString();
        let carpetaPalo = palosP[i].charAt(0).toUpperCase() + palosP[i].slice(1);
    
        let cartaPObj = {
          id: contadorP,
          numero: j,
          palo: palosP[i],
          ruta: "cards/dark/" + carta + "-" + palosP[i] + ".png",
          nombre: carta
        };
        barajaP.push(cartaPObj);
        contadorP++;
      }
    }
    
  
    for (let k = 0; k < cartasExtras.length; k++) {
      for (let i = 0; i < palosP.length; i++) {
        let carta = cartasExtras[k];
        let carpetaPalo = palosP[i].charAt(0).toUpperCase() + palosP[i].slice(1);
        
        let cartaPObj = {
          id: contadorP,
          numero: 0,
          palo: palosP[i],
          ruta: "cards/dark/" + carta + "-" + palosP[i] + ".png",
          nombre: carta
        };
        barajaP.push(cartaPObj);
        contadorP++;
      }
    }
    
    console.log(barajaP);
    




  
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

let botonP = document.querySelector("#generateBtp");


document.getElementById('cardImageP').src = randomItem(barajaP).ruta;
document.getElementById('cardImageP').alt = randomItem(barajaP).nombre;


botonP.addEventListener("click", cambiarImagenP);

function cambiarImagenP() {
  let cartaP = randomItem(barajaP);
  document.getElementById('cardImageP').src = cartaP.ruta;
  document.getElementById('cardImageP').alt = cartaP.nombre;
}



