
var vasoCorrecto=randomItem()

var contadorF=0
var contadorA=0

let boton1 = document.querySelector(".vaso1")
let boton2 = document.querySelector(".vaso2")
let boton3 = document.querySelector(".vaso3")


boton1.addEventListener("click", descubir1);
boton2.addEventListener("click", descubir2);
boton3.addEventListener("click", descubir3);





function descubir1(){
    if(vasoCorrecto==1){
        contadorA++
        boton1.innerHTML="<img src="+"moneda.png"+">"
    }else{
        contadorF++
    }

}
function descubir2(){
    if(vasoCorrecto==2){
        contadorA++
        boton2.innerHTML="<img src="+"moneda.png"+">"
    }else{
        contadorF++
    }

}
function descubir3(){
    if(vasoCorrecto==3){
        contadorA++;
        boton3.innerHTML="<img src="+"moneda.png"+">"
    }else{
        contadorF++
    }

}

function randomItem(){
    return Math.floor(Math.random()*3+1);
}

let aciertos=document.querySelector(".a")
let fallos=document.querySelector(".f")

aciertos.innerHTML+="Aciertos: "+contadorA
aciertos.innerHTML+="Fallos: "+contadorF