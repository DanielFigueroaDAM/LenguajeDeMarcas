//Funciones anonimas
let func = function(){
    alert("Hola soy una funcion anonima")
}

//funcion de callback: es una funcion que se pasa como argumento a otra funcion
function getCopyright(name,year,callback){
let copyright = callback(name,year);
return copyright;

}

//funcion autoinvocada
(function(){
    alert("Hola soy una funcion autoinvocada")
})();