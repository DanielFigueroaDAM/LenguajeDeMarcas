let mih1 = document.querySelector("h1");
mih1.innerHTML = "Adios buenas noches";
console.log(mih1);

function cambiarColor(){
    mih1.style.color="green"
}

mih1.addEventListener("click",cambiarColor)