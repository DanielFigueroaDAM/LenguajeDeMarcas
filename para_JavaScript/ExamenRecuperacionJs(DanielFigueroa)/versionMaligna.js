var alumnosNombres=["Adrian","Adrian","Andrea","Borja","Carlos","Daniel","Daniel","David","Dima","Ivan","Javier","Jorge","Karly","Manuel","Miguel"]
var alumnosApellidos=["Hermo","Miguez","Mourino","Iglesias","Costas","Figueroa","Rodriguez","Iglesias","Apellidez","Gutierrez","Portela","Almendrado","Albarran","Carrera","Amboage"]
var frases=["Cristiano es mejor que messi","Dark Souls es el peor juego de la historia","¿Un fort o que?","Nooooooo la poliziaa!!!!","No sé qué poner","Voy a dejar el CandyCrush","Eres muy chu chu chuli","Salgo escupío por la puerta","¿Nicki Nicole si o no?","La ira me consume","Sin Miedo al exito","¿Unos FIFAS de mientras?","Putin","Este finde no salgo que tengo que estudiar","Pedro Sánchez dimisión!!!"];



//Creacion de nombre completada
function evilNombre(indice){
    let nuevoNombre="";
    let lNombre=alumnosNombres[indice].charAt(0)+alumnosNombres[indice].charAt(1);

    let lApellido=alumnosApellidos[indice].charAt(0)+alumnosApellidos[indice].charAt(1);

    nuevoNombre=lApellido+alumnosNombres[indice].substring(2,alumnosNombres[indice].length)+" ";
    nuevoNombre+=lNombre+alumnosApellidos[indice].substring(2,alumnosApellidos[indice].length);
    console.log(nuevoNombre)

    return nuevoNombre

}

function nombreReal(indice){
    nombre=alumnosNombres[indice]+" "+alumnosApellidos[indice];
    return nombre;
}

//retorna el numero aleatorio 
function numeroRandom() {
    return Math.floor(Math.random() * alumnosNombres.length) + 1;
}


function crearCarta(){
    let name = document.querySelector("#name");
    let indice=numeroRandom();
    name.innerHTML=evilNombre(indice);
    crearImagen(nombreReal(indice));
    modificarFrase(indice);


}
let frase=document.querySelector("#frase");
function modificarFrase(indice){
    frase.innerHTML=frases[indice]
}
document.getElementById("btn").addEventListener("click", crearCarta);
let imgn = document.querySelector("#imgn");
function crearImagen(nombreR){
    let ruta ="exercicio 1 exame/"+nombreR+".jpg";
    console.log(ruta)
    imgn.src=ruta;
}