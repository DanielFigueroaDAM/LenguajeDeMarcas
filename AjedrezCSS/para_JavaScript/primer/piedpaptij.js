let pPrimera = 0;
let pSegunda = 0;
let segunda;
let primera;

for (let i = 0; i < 3; i++) {
    let ind
    do {
        ind=true
        primera = eleccion(ind);
        if (primera == false) {
            alert("No está bien escrito o no es valido, vuelve a repetirlo");
        }
    } while (primera == false);

    do {
        ind=false
        segunda = eleccion(ind);
        if (segunda == false) {
            alert("No está bien escrito o no es valido, vuelve a repetirlo");
        }
    } while (segunda == false);

    let c = comparacion(primera, segunda);
    if (c == 1) {
        pPrimera = pPrimera + 1;
    } else if (c == -1) {
        pSegunda = pSegunda + 1;
    } else if (c == 0) {
        alert("Empate");
        i = i - 1;
    }
    if(pPrimera==2 || pSegunda==2){
        break;
    }
}
comprobarVictoria(pPrimera,pSegunda)



function comprobarVictoria(n1,n2){
    if (n1 > n2) {
        alert("Ganó el primero");
    } else if (pSegunda > pPrimera) {
        alert("Ganó el segundo");
    }
}

function eleccion(indice) {
    let result;
    let elec
    if(indice==true){
        elec = prompt("primer jugador: Elige piedra, papel o tijera");
    }else{
        elec=prompt("Segundo jugador: Elige piedra,papel o tijera")
    }
    
    if (elec == "piedra" || elec == "papel" || elec == "tijera") {
        alert("Es valido");
    } else {
        elec = false;
    }
    return elec;
}

function comparacion(una, dos) {
    let c;
    if (una == "piedra" && dos == "tijera") {
        alert("Gana la primera");
        c = 1;
    } else if (una == "papel" && dos == "piedra") {
        alert("Gana la primera");
        c = 1;
    } else if (dos == "piedra" && una == "tijera") {
        alert("Gana la segunda");
        c = -1;
    } else if (dos == "papel" && una == "piedra") {
        alert("Gana la segunda");
        c = -1;
    } else if (una == "tijera" && dos == "papel") {
        alert("Gana la primera");
        c = 1;
    } else if (dos == "tijera" && una == "papel") {
        alert("Gana la segunda");
        c = -1;
    } else if (una == dos) {
        c = 0;
    }
    return c;
}
