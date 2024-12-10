
# Propiedades clave de Flexbox

## 1. **En el contenedor padre (flex container):**
- **`flex-direction`**: Determina la dirección del eje principal.
  - **row**: Los elementos son colocados en la misma dirección del texto (de izquierda a derecha en idiomas occidentales).
  - **row-reverse**: Los elementos son colocados en la dirección opuesta al texto (de derecha a izquierda en idiomas occidentales).
  - **column**: Los elementos se colocan de arriba hacia abajo.
  - **column-reverse**: Los elementos se colocan de abajo hacia arriba.
- **`justify-content`**: Alinea los elementos secundarios en el eje principal.
  - **flex-start**: Alinea los elementos al inicio del contenedor (por defecto).
  - **flex-end**: Alinea los elementos al final del contenedor.
  - **center**: Alinea los elementos en el centro del contenedor.
  - **space-between**: Muestra los elementos con espacio igual entre ellos, dejando los extremos del contenedor sin margen.
  - **space-around**: Muestra los elementos con espacio igual alrededor de cada uno.
  - **space-evenly**: Muestra los elementos con espacio igual entre ellos y en los extremos.
- **`align-items`**: Alinea los elementos secundarios en el eje perpendicular (vertical por defecto).
  - **flex-start**: Alinea los elementos al inicio del eje perpendicular.
  - **flex-end**: Alinea los elementos al final del eje perpendicular.
  - **center**: Alinea los elementos en el centro del eje perpendicular.
  - **baseline**: Alinea los elementos según su línea base de texto.
  - **stretch**: Los elementos se estiran para llenar el espacio disponible del contenedor (por defecto si no se define altura explícita).
- **`align-content`**: Ajusta la alineación de varias filas cuando hay más de una línea de elementos.
  - **flex-start**: Las líneas se agrupan al inicio del eje perpendicular.
  - **flex-end**: Las líneas se agrupan al final del eje perpendicular.
  - **center**: Las líneas se agrupan en el centro del eje perpendicular.
  - **space-between**: Las líneas tienen el mismo espacio entre ellas.
  - **space-around**: Las líneas tienen el mismo espacio alrededor de ellas.
  - **stretch**: Las líneas se estiran para llenar el espacio disponible.

---

## 2. **En los elementos hijos (flex items):**
- **`flex`**: Controla cómo un elemento crece o se encoge en el contenedor.
  - **flex-grow**: Define cuánto puede crecer un elemento en proporción al resto (valor predeterminado: 0).
  - **flex-shrink**: Define cuánto puede encogerse un elemento en proporción al resto (valor predeterminado: 1).
  - **flex-basis**: Establece el tamaño base del elemento antes de aplicar crecimiento o encogimiento (puede ser en px, %, auto, etc.).
- **`align-self`**: Permite alinear un elemento individual de forma diferente al resto.
  - Valores: Igual que `align-items` (**flex-start**, **flex-end**, **center**, **baseline**, **stretch**).

---

# Otras propiedades CSS

## 1. **Poner borde: `border` y `border-color`**
- Define bordes para los elementos, incluyendo grosor, estilo y color.
- Ejemplo: `border: 2px solid red;` o `border-color: blue;`.

## 2. **Redondear borde: `border-radius`**
- Hace que las esquinas de los bordes sean redondeadas.
- Ejemplo: `border-radius: 10px;`.

## 3. **`padding`**
- Define el espacio interno entre el contenido y los bordes del elemento.
- Ejemplo: `padding: 20px;`.

## 4. **`margin`**
- Define el espacio externo entre el elemento y otros elementos adyacentes.
- Ejemplo: `margin: 15px;`.

## 5. **`text-align`**
- Alinea el texto horizontalmente dentro de un elemento.
- Ejemplo: `text-align: center;`.

## 6. **`background-color`**
- Cambia el color de fondo de un elemento.
- Ejemplo: `background-color: #f0fff0;`.

## 7. **`font-family`**
- Establece la fuente del texto del elemento.
- Ejemplo: `font-family: Arial, sans-serif;`.

## 8. **`width` y `height`**
- Define el ancho y alto del elemento.
- Ejemplo: `width: 200px; height: 100px;`.

## 9. **`display: inline-flex;`**
- Hace que los elementos secundarios se comporten como flexibles, pero permanecen en línea.
- Ejemplo: `display: inline-flex;`.

## 10. **`text-indent`**
- Crea una sangría al inicio del texto.
- Ejemplo: `text-indent: 20px;`.

## 11. **`float`**
- Hace que un elemento flote hacia la izquierda o derecha.
- Ejemplo: `float: left;`.

## 12. **`position: relative` y `position: absolute`**
- **relative**: Posiciona el elemento en relación a su posición normal.
- **absolute**: Posiciona el elemento en relación al contenedor posicionado más cercano.
- Ejemplo: `position: absolute; top: 10px;`.

## 13. **`z-index: 0;`**
- Define la superposición de elementos (elementos con mayor `z-index` se colocan por encima).
- Ejemplo: `z-index: 0;`.

## 14. **`background-image: url('imagenes/sol.png');`**
- Establece una imagen de fondo.
- Ejemplo: `background-image: url('imagenes/sol.png'); background-size: cover;`.

## 15. **`font-weight: bold;`**
- Aplica negrilla al texto para hacerlo más grueso y destacado.
- Ejemplo: `font-weight: bold;`.
## Guía sobre los valores de `display` en CSS

### **1. `display: block;`**
- Hace que un elemento sea un contenedor de bloque.
- Características:
  - Ocupa todo el ancho disponible.
  - Inicia en una nueva línea.
- Ejemplo: `div`, `p`, `h1` por defecto tienen este comportamiento.

### **2. `display: inline;`**
- Hace que un elemento se comporte como un elemento en línea.
- Características:
  - Solo ocupa el ancho necesario para su contenido.
  - No inicia en una nueva línea.
- Ejemplo: `span`, `a`, y `strong` tienen este comportamiento por defecto.

### **3. `display: inline-block;`**
- Combina características de `block` y `inline`.
- Características:
  - Se comporta como un elemento en línea, pero permite establecer propiedades como `width` y `height`.
- Ejemplo: Útil para crear botones o elementos alineados en una fila con tamaño ajustable.

### **4. `display: flex;`**
- Activa el modelo de caja flexible (Flexbox).
- Características:
  - Permite alinear y distribuir elementos secundarios de forma eficiente.
  - Ejemplo: `justify-content`, `align-items` funcionan con este valor.

### **5. `display: grid;`**
- Activa el modelo de cuadrícula (Grid).
- Características:
  - Permite organizar elementos en filas y columnas.
  - Ejemplo: Útil para diseños complejos con `grid-template-rows` y `grid-template-columns`.

### **6. `display: inline-flex;`**
- Similar a `flex`, pero el contenedor se comporta como un elemento en línea.
- Características:
  - Los elementos secundarios se manejan como Flexbox, pero el contenedor se muestra en línea.

### **7. `display: none;`**
- Oculta el elemento completamente.
- Características:
  - El elemento no se renderiza ni ocupa espacio en el diseño.

### **8. `display: contents;`**
- Hace que el contenedor desaparezca visualmente.
- Características:
  - Solo los elementos secundarios son visibles, pero sin el contenedor en sí.

### **9. `display: table;`**
- Hace que el elemento se comporte como una tabla.
- Características:
  - Útil para estructurar contenido similar a las tablas HTML.

### **10. `display: table-row;`**
- Hace que el elemento se comporte como una fila de tabla.
- Características:
  - Solo tiene efecto si está dentro de un elemento con `display: table`.

### **11. `display: table-cell;`**
- Hace que el elemento se comporte como una celda de tabla.
- Características:
  - Solo tiene efecto dentro de un contenedor con `display: table-row`.

### **12. `display: inherit;`**
- Hereda el valor de `display` del elemento padre.
- Ejemplo: Si el contenedor padre tiene `display: flex`, este valor será heredado.

---

### Resumen de usos comunes:
- **Diseños simples**: `block`, `inline`, `inline-block`.
- **Diseños avanzados**: `flex`, `grid`.
- **Elementos invisibles**: `none`, `contents`.