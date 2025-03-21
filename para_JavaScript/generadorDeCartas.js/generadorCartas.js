//Generar cartas, cada carta es un objeto con: id,numero,palo,ruta. imagenes en estemia
let palos = ["copas", "oros", "bastos", "espadas"];
let baraja = [];
let contador = 1;

for (let i = 0; i < 4; i++) {
    for (let j = 1; j <= 12; j++) {
        let carta;
        // Asignar el nombre de la carta según el número
        if (j === 1) {
            carta = "As";
        } else if (j >= 2 && j <= 10) {
            carta = j.toString(); // Para los números 2-10
        } else if (j === 11) {
            carta = "Sota";
        } else if (j === 12) {
            carta = "Caballo";
        }

        // Agregar la carta al array con su palo
        baraja.push([carta, palos[i]]);
    }
}

// Agregar comodines
baraja.push([0, "comodin1"]);
baraja.push([0, "comodin2"]);