let arrayNome = ["Pantera", "Muerte", "Barriga", "Torementa", "Mascara", "Nalga", "Gacela", "Tempestad", "Sombra", "Barba", "Gacela", "Bestia", "Venganza", "Capibara", "Florecilla", "Águila", "Juventud", "Estrella", "Serpiente", "Fuerza", "Masacre", "Niebla", "Masa", "Greña", "Pesadilla", "Quimera"]

let arrayApellido = ["Desnuda", "Dorada", "Sanguinaria", "Letal", "Sexy", "Demoníaca", "Flacida", "Implacable", "Destructora", "Veloz", "Plateada", "Suicida", "Bailonga", "Mugrienta", "Amorosa", "Infernal", "del Espacio", "Salvaje", "Fornida", "Colosal", "Feroz", "del Abismo", "Rocosa", "Fiestera", "Fantasmal", "Voladora"]

var arrayLetras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let respuesta = document.querySelector("#respuesta")

let boton = document.querySelector("#envio")



var nombre = prompt("Escribe tu nombre nombre")
var apellido = prompt("Escribe tu apellido")


generar()





function generar() {
    let primeraLetraNombre = nombre.charAt(0).toUpperCase()
    let primeraLetraApellido = apellido.charAt(0).toUpperCase()
    console.log(arrayNome[averguarPosicion(primeraLetraNombre)])
    console.log(arrayNome[averguarPosicion(primeraLetraApellido)])

    respuesta.innerHTML = arrayNome[averguarPosicion(primeraLetraNombre)] + " " + arrayNome[averguarPosicion(primeraLetraApellido)]

}




//Averiguar posicion de la letra o del apellido
function averguarPosicion(primeraLetraNombre) {
    let posicion
    for (let i = 0; i < arrayLetras.length; i++) {
        if (primeraLetraNombre == arrayLetras[i]) {
            posicion = i;
        }
    }
    return posicion
}




