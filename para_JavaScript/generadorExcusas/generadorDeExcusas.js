let boton = document.querySelector("#generateBtn");
let titulo = document.querySelector("h1");


boton.addEventListener("click", cambiarTexto);

function cambiarTexto(){
    titulo.innerHTML = quien() + " " + que() + " " + como() + " " + palabraFinal();
}


function quien() {
    let opciones = [
        "Mi hermano menor",
        "El perro de mi vecina",
        "Mi compañero de cuarto",
        "El repartidor de pizza",
        "Mi primo recién llegado",
        "Mi profesor de matemáticas",
        "El vigilante de la entrada"
      ];
    return randomItem(opciones);
  }
  
  function que() {
    let opciones = [
        "tomó mis tareas",
        "tiró mis tareas por la ventana",
        "estornudó sobre mis tareas",
        "arrugó mis tareas",
        "pisoteó mis tareas",
        "quemó mis tareas"
      ];
    return randomItem(opciones);
  }
  
  function como() {
    let opciones = [
        "sin darse cuenta",
        "mientras jugaba al Fortnite",
        "cuando intentaba ayudar",
        "gritando de pánico",
        "mientras grababa un TikTok",
        "con cara de pocos amigos",
        "corriendo como loco"
      ];
    return randomItem(opciones);
  }
  
  function palabraFinal() {
    let opciones = [
        "y tuve que empezar de cero.",
        "y todo se arruinó por completo.",
        "y desapareció sin dejar rastro.",
        "y ya no pude presentarlas a tiempo.",
        "y nunca logré recuperarlas.",
        "y terminé metido en un gran lío."
      ];
    return randomItem(opciones);
  }

  function randomItem(array){
        return array[(Math.floor(Math.random()*array.length))];
  }