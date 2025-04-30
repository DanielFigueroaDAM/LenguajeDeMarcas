var cuenta = 0;
var incremento = 1;




function crearContador() {
    return () => {
        cuenta = cuenta + incremento;
        document.getElementById("cuentaClicks").textContent = cuenta;
    };
}

let incrementarClicks = crearContador();
document.getElementById("btnContador").addEventListener("click", incrementarClicks);

function aumentarIncremento() {
    if (cuenta >= 10) {
        cuenta = cuenta - 10;
        incremento++;
    }
    document.getElementById("cuentaIncremento").textContent ="x"+incremento;
    document.getElementById("cuentaClicks").textContent = cuenta;
}
document.getElementById("btnContador1").addEventListener("click", aumentarIncremento);

function multiplicarIncremento(){
    if(cuenta>=100){
        cuenta=cuenta-100;
        incremento=incremento*2;
    }
    document.getElementById("cuentaIncremento").textContent ="x"+incremento;
    document.getElementById("cuentaClicks").textContent = cuenta;
}
document.getElementById("btnContador2").addEventListener("click", multiplicarIncremento);
