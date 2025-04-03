var dado = document.querySelector(".espacio")
let boton = document.querySelector(".gBoton")

boton.addEventListener("click", tiraDado)




function tiraDado(){
    let num=randomItem();
    dado.innerHTML=`<img id="dado_generado" src="dado${num}.png" width="300">`;
}




function randomItem(){
    let randomz= Math.floor(Math.random() * 6) + 1;
    return randomz
  }