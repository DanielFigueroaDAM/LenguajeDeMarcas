let audio=document.querySelector("audio")
let boton=document.querySelector(".miBoton")

boton.addEventListener("click",emitSound)

emitSound(){
    audio.currentTime=0
    audio.play();
}