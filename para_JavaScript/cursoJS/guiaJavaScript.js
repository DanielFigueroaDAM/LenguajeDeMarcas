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
//Otra forma de hacer una funcion autoinvocada
(function(name,year){
    console.log(name,year)
}("Juan",2023));
//Otra forma de hacer una funcion autoinvocada
(function(name="Juan",year=2023){
    console.log(name,year)
}());


//Ejemplo de uso de la funcion getCopyright con una variable ya definida

function getCopyright2(name,year=2023){
    return `Copyright ${year} ${name}`;
}
console.log(getCopyright2("Juan")); //Esto funciona y se agarra el año ya definido en la funcion
console.log(getCopyright2("Juan",2025)); //Esto funciona y se agarra el año que le pasamos como argumento