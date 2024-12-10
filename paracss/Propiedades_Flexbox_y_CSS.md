
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
