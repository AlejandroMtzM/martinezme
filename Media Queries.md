## Media Queries en CSS
Las medias queries, funcionan como una técnica popular para entregar una hoja de estilo personalizada a diferentes dispositivos. 

### Usos
Son especialmente útiles cuando se desea modificar la página web o aplicación en función del tipo de dispositivo de características y parámetros específicos.
Se utilizan para:
1. Aplicar estilos condicionales con las reglas-at @media e @import de CSS.
2. Indicar medios específicos en los elementos link, source y otros elementos HTML.
3. Testear y monitorizar los estados de los medios usando los métodos de javascript Window.matchMedia() y MediaQueryList.addListener().

### Tipos de medios

- **all**
    Apto para todos los dispositivos.
- **print**
    Destinado a material impreso y visualización de documentos en una pantalla en el modo de vista previa de impresión. 
- **screen**
    Destinado principalmente a las pantallas.
- **speech**
    Destinado a sintetizadores de voz. 
### Operadores Lógicos
Se pueden redactar queries utilizando operadores lógicos, incluyendo **not**, **and**, y **only**.

**Operador AND**
```css
/* El siguiente código aplicará estilos cuando la pantalla tenga un ancho mínimo de 700px 
y la orientación de la misma sea horizontal.*/
@media (min-width: 700px) and (orientation: landscape) { ... }
```
**Operador NOT**
```css
/* El siguiente código aplicará estilos cuando no se cumpla la condición especificada */
@media not screen and (monochrome) { ... }
```
**Operador ONLY**
```css
/*El operador only previene que navegadores antiguos que no soportan queries con funciones 
pliquen los estilos asignados: */
<link rel="stylesheet" media="only screen and (color)" href="Ejemplo.css" />
```

### Ejemplos:
```css
/* Vuelve el background azul */
body {
  background-color: blue;
}

/* En ventanas de 992px o menos, se vuelve el background azul */
@media screen and (max-width: 992px) {
  body {
    background-color: blue;
  }
}

/* En ventanas de 600px o menos, se vuelve el background oliva */
@media screen and (max-width: 600px) {
  body {
    background-color: olive;
  }
} 
```
Para Menus
```css
 /* navbar container */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Navbar links */
.topnav a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* En pantallas de 600px ancho o menores, cambia la forma en la que se acomodaran los menus a uno arriba de 
otro en vez de uno al lado de otro*/
@media screen and (max-width: 600px) {
  .topnav a {
    float: none;
    width: 100%;
  }
} 
```

Para Columnas
```css
/* Container para flexboxes */
.row {
  display: flex;
  flex-wrap: wrap;
}

/* Crea cuatro columnas iguales */
.column {
  flex: 25%;
  padding: 20px;
}

/* En pantallas de 992 px de ancho o menos, pasa de cuatro columnas a dos columnas */
@media screen and (max-width: 992px) {
  .column {
    flex: 50%;
  }
}

/* En pantallas de 600 px de ancho o menos, hace que las columnas se apilen una encima de la otra en
 lugar de una al lado de la otra */
@media screen and (max-width: 600px) {
  .row {
    flex-direction: column;
  }
}
```

Ocultar elementos con media queries
```css
/* Si el tamaño de la pantalla es de 600 px de ancho o menos, oculta el elemento. */
@media screen and (max-width: 600px) {
  div.example {
    display: none;
  }
}
```

Cambiar el tamaño de fuente con media queries
```css
/* Si el tamaño de la pantalla es de más de 600 px de ancho, hace el tamaño de fuente de <div> en 80 px*/
@media screen and (min-width: 600px) {
  div.example {
    font-size: 80px;
  }
}

/* Si el tamaño de la pantalla es de 600 px de ancho o menos, 
establece el tamaño de fuente de <div> en 30 px*/
@media screen and (max-width: 600px) {
  div.example {
    font-size: 30px;
  }
}
```

Orientación: Portrait / Landscape
```css
@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

Min Width a Max Width
```css
/* Cuando el ancho esté entre 600px y 900px O por encima de 1100px - cambia la apariencia de <div> */
@media screen and (max-width: 900px) and (min-width: 600px), (min-width: 1100px) {
  div.example {
    font-size: 50px;
    padding: 50px;
    border: 8px solid black;
    background: yellow;
  }
}
```

### Bibliografia
- <https://www.w3schools.com/css/css3_mediaqueries_ex.asp>
- <https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries>
- <https://desarrolloweb.com/articulos/css-media-queries.html>
- <https://www.eniun.com/media-queries-css-diseno-web-responsive/#3_Operadores_logicos_en_media_queries>