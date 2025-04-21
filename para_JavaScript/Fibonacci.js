let puntos = 0;
let mih1 = document.querySelector("#fibo");
let nfibo1=0;
let nfibo2=1;
let aux=0;
mih1.innerHTML+=nfibo1+"-"+nfibo2+"-";

let arrayFibonacci=[]

for(let i=0;i<12;i++){
    //0-1-1-2-3-5-8-13
    aux=nfibo1+nfibo2
    mih1.innerHTML+=aux+"-";
    arrayFibonacci[i]=aux
    nfibo1=nfibo2;
    nfibo2=aux;

}
console.log(arrayFibonacci)


let colores=["green", "red", "blue"]

mih1.style.color=colores[randomItem(colores)]



function randomItem(colores){
    return (Math.floor(Math.random()*colores.length))
}