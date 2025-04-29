/**************************************************
 * Configuración del tablero                      *
 **************************************************/
const mapaKatan = [
    { id:1,  tipo:"pedra",  numero:10, cores:["vermello"] },
    { id:2,  tipo:"ovella", numero:2,  cores:["vermello"] },
    { id:3,  tipo:"madeira",numero:9,  cores:["amarelo"] },
    { id:4,  tipo:"trigo",  numero:12, cores:["branco"] },
    { id:5,  tipo:"barro",  numero:6,  cores:["vermello","branco"] },
    { id:6,  tipo:"ovella", numero:4,  cores:["amarelo"] },
    { id:7,  tipo:"barro",  numero:10, cores:["amarelo"] },
    { id:8,  tipo:"trigo",  numero:9,  cores:["vermello"] },
    { id:9,  tipo:"madeira",numero:11, cores:["branco","vermello"] },
    { id:10, tipo:"madeira",numero:3,  cores:["branco"] },
    { id:11, tipo:"pedra",  numero:8,  cores:["branco"] },
    { id:12, tipo:"madeira",numero:8,  cores:["vermello"] },
    { id:13, tipo:"pedra",  numero:3,  cores:["amarelo","azul"] },
    { id:14, tipo:"trigo",  numero:4,  cores:["azul","amarelo"] },
    { id:15, tipo:"ovella", numero:5,  cores:["branco","azul"] },
    { id:16, tipo:"barro",  numero:5,  cores:["azul"] },
    { id:17, tipo:"trigo",  numero:6,  cores:["amarelo"] },
    { id:18, tipo:"ovella", numero:11, cores:["azul"] }
  ];
  
  /**************************************************
   * Estado de los materiales por color             *
   **************************************************/
  const materialesIniciales = () => ({
    pedra: 0,
    ovella: 0,
    madeira: 0,
    trigo: 0,
    barro: 0
  });
  
  const colores = {
    vermello: materialesIniciales(),
    azul:     materialesIniciales(),
    branco:   materialesIniciales(),
    amarelo:  materialesIniciales()
  };
  
  /**************************************************
   * Cachés de elementos DOM                        *
   **************************************************/
  const contenedor = document.getElementById("contenedor");
  const boton      = document.getElementById("gBtn");
  const modSuma    = document.getElementById("suma");
  
  boton.addEventListener("click", tirarDados);
  
  /**************************************************
   * Lógica principal                               *
   **************************************************/
  function tirarDados() {
    contenedor.innerHTML = "";           // limpiamos imágenes
  
    const dado1 = lanzarDado();
    const dado2 = lanzarDado();
    const total = dado1 + dado2;
  
    // Mostramos los dados como imágenes (dado1.png … dado6.png)
    contenedor.innerHTML = `
      <img src="dado${dado1}.png" width="60" alt="Dado ${dado1}">
      <img src="dado${dado2}.png" width="60" alt="Dado ${dado2}">
    `;
  
    modSuma.textContent = total;
  
    // Robber (7) – salimos sin repartir materiales
    if (total === 7) return;
  
    repartirMateriales(total);
    renderizarMateriales();
  }
  
  function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1; // 1‑6
  }
  
  function repartirMateriales(numero) {
    mapaKatan.forEach(casilla => {
      if (casilla.numero === numero) {
        casilla.cores.forEach(color => {
          colores[color][casilla.tipo]++;
        });
      }
    });
  }
  
  function renderizarMateriales() {
    ["vermello","azul","branco","amarelo"].forEach(color => {
      const div = document.getElementById(color);
      const mats = colores[color];
      div.textContent = `${color.toUpperCase()}:  ` +
        Object.entries(mats)
              .map(([k,v]) => `${k}: ${v}`)
              .join("   "); // espacios no‑rompibles para alinear
    });
  }