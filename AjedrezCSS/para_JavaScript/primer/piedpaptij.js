let pPrimera
let pSegunda
let segunda
let primera
for(int i=0;i=2;i++){
    do{
        primera=eleccion()
        if(primera=false){
            alert("No está bien escrito o no es valido, vuelve a repetirlo")
        }
    }while(primera==false)
    do{
        segunda=eleccion()
        if(segunda=false){
            alert("No está bien escrito o no es valido, vuelve a repetirlo")
        }
    }while(segunda==false)

    let c = comparacion(primera,segunda)
    if(c==1){
        pPrimera=pPrimera+1
    }else if(c==2){
        pSegunda=pSegunda+1
    }
    else if(c==0){
        alert("Empate")
        i=i-1
    }

}


function eleccion(){
    let result
    let elec=prompt("Elige piedra,papel o tijera")
    if(elec == "piedra" || elec == "papel" || elect == "tijera"){
        alert("Es valido")
    }else {
        elec=false
    }
    return elec
}
function comparacion(una,dos){
    let c
    if(una=="piedra" && dos=="tijera"){
        alert("Gana la primera")
        c=1
    }
    else if(una=="papel" && dos=="piedra"){
        alert("Gana la primera")
        c=1
    }else if(dos=="piedra"&& una="tijera"){
        alert("Gana la segunda")
        c=-1
    }else if(dos=="papel" && una=="piedra"){
        alert("Gana la segunda")
        c=-1
    }else if(una=="tijera"&&dos=="papel"){
        alert("Gana la primera")
        c=1
    }else if(dos=="tijera"&&=="papel"){
        alert("Gana la segunda")
        c=-1
    }else if(dos==uno){
        c= 0
    }
    return c

}