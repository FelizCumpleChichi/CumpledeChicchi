# Nuestra historia, destino tras destino

Tarjeta interactiva de cumpleaños para Chichi. Proyecto estático que se puede publicar en GitHub Pages, sin backend.

## Abrir la experiencia

Abrí `index.html` en un navegador moderno. También se puede levantar con un servidor local, por ejemplo `python -m http.server 8000` dentro de esta carpeta y abrir `http://localhost:8000`.

## Agregar fotos del grupo

1. Guardá las fotos en la carpeta del destino correspondiente, dentro de `assets/`. Por ejemplo `assets/tandil-2025/foto-01.jpg`.
2. Abrí `data.js`, buscá el viaje cuyo `id` sea `tandil-2025` y cambiá `photos: []` por `photos: ['assets/tandil-2025/foto-01.jpg', 'assets/tandil-2025/foto-02.jpg']`. Se admiten de 1 a 8 imágenes por capítulo.
3. Para usar una foto de portada, cambiá `cover: ''` por `cover: 'assets/tandil-2025/portada.jpg'`.
4. Para la imagen del regalo, usá `assets/rio-2027/portada.jpg` y configurá `finale.image` al final de `data.js`.

Recomendación: JPEG o WebP con calidad 75-85%; portada de 1600 px de ancho y fotos entre 900 y 1400 px, para que WhatsApp móvil no sufra con el peso. Las fotos faltantes se muestran con placeholders. El código no inventa fotos del grupo.

## Modificar mensajes y destinos

Todos los textos están en `data.js`. Dentro de `trips`, modificá `date`, `destination`, `kicker`, `message`, `emoji`, `colors`, `photos` y `cover`. Las tres Mar del Plata son independientes. Brasil 2025 incorpora `places` con sus tres paradas.

Para incorporar nuevos recuerdos anteriores a la sorpresa, agregá objetos a `trips` siguiendo el mismo esquema. El orden en el archivo es el orden de aparición.

Para mostrar viajes *aún no realizados*, agregá objetos a `upcoming` en `data.js`, por ejemplo:

```js
upcoming: [
  {id:'viaje-futuro',date:'NOVIEMBRE 2026',destination:'Destino confirmado',status:'upcoming',message:'Próximamente…',colors:['#365d76','#c7a287'],photos:[],cover:''}
],
```

Los viajes futuros se distinguen como "Próximamente". No incorpores Río 2027 en `trips` ni `upcoming`, porque revelaría el regalo antes de tiempo.

## Publicar en GitHub Pages

1. Creá un repositorio nuevo en GitHub (por ejemplo `regalo-silvi`).
2. Subí todo el contenido de esta carpeta a la **raíz del repositorio** (no la carpeta que lo contiene).
3. Abrí **Settings > Pages > Build and deployment**. Elegí **Deploy from a branch**, seleccioná `main` y carpeta `/ (root)` y guardá.
4. Esperá a que GitHub publique el sitio y compartí el enlace que aparece en Pages.

**Importante sobre la sorpresa:** el regalo está oculto en la interfaz hasta el final, pero el texto está presente en los archivos públicos de JavaScript. Es una sorpresa visual, no un secreto protegido criptográficamente. Evitá compartir el repositorio o el código fuente con Chichi antes de entregarle el enlace.

**Privacidad:** al publicar en GitHub Pages, las fotografías cargadas serán accesibles públicamente para quien conozca su URL. Usá solo fotos que el grupo quiera compartir.

## Controles

- Celular: botones y gestos horizontales.
- Teclado: flechas izquierda y derecha.
- Fotos: tocar para ampliar, cerrar con X o Escape.
- Respeta la preferencia de movimiento reducido del dispositivo.

## Archivos

- `index.html`: estructura de la página.
- `styles.css`: diseño y animación.
- `app.js`: navegación e interacción.
- `data.js`: contenido editable.
- `assets/`: portadas y fotografías por destino.


## Actualización v2: El gran viaje 2026

Después del décimo recuerdo se muestra **un solo capítulo especial** con seis paradas, en el orden Washington D. C. → Philadelphia → New York → Boston → Montreal → Punta Cana. Se avanza manualmente entre ciudades y después se muestra un cierre emocional antes de la sorpresa.

Para editarlo, abrí `data.js` y buscá `specialTrip2026`. Cambiá `title`, `subtitle`, `date`, `countries`, `closingTitle`, `closingMessage` y los campos de cada entrada de `stops`. Para agregar fotos panorámicas de ciudades, copialas en `assets/gran-viaje-2026/` y completá `image:'assets/gran-viaje-2026/washington.jpg'`, por ejemplo. De forma predeterminada se muestran fondos provisionales ilustrados con iconos de cada destino: **no son fotos del grupo**.

Las coordenadas son reales y se proyectan sobre un mapa estilizado sin costas ni límites administrativos. La línea muestra la secuencia del recorrido y **no implica traslados aéreos**. Las seis paradas no se agregan a `trips` ni a `upcoming`. `upcoming` permanece disponible para futuras ampliaciones, pero no se utiliza en este flujo para evitar duplicaciones.

Navegación: flechas del teclado, deslizamientos horizontales y botones. Desde la primera parada, volver regresa a Mar del Plata III. Desde la sexta, avanzar abre el cierre del gran viaje. Desde ese cierre se pasa a la pantalla del regalo; el destino secreto solo se visualiza al presionar **“Chichi, abrí tu regalo”**.


## V4 · Gran Viaje 2026, itinerario visual

El capítulo especial dejó de mostrarse como una grilla rígida y ahora funciona como **una sola pieza narrativa**, tipo hoja de ruta / scrapbook de viaje. Los seis destinos siguen apareciendo en una única pantalla, pero ahora están unidos por una **ruta visual continua** y con jerarquía distinta entre postales: Washington como punto de partida, New York con más protagonismo, Montreal como cambio de país y Punta Cana como remate cálido del recorrido.

### Cómo editarlo

En `data.js`, dentro de `specialTrip2026`, seguís pudiendo cambiar:

- `title`
- `subtitle`
- `date`
- `countries`
- `closingTitle`
- `closingMessage`
- los datos de `stops` (nombre, bandera, mensaje, imagen, coordenadas y texto alternativo)

Las seis ciudades **no** se transforman en capítulos independientes y no hay navegación interna por destino. El botón **“Continuar nuestra historia”** lleva directo a la pantalla de expectativa previa al regalo.

### Fotos del capítulo especial

Las seis referencias siguen definidas dentro de `specialTrip2026.stops`. Si querés volverlas locales, podés descargar las imágenes en `assets/gran-viaje-2026/` y reemplazar cada `image:` por una ruta como:

```js
image: 'assets/gran-viaje-2026/new-york.jpg'
```

El archivo `assets/gran-viaje-2026/FUENTES_Y_LICENCIAS.md` conserva las fuentes de referencia utilizadas hasta ahora.

## V5 · Renovación completa de fotografías del Gran Viaje 2026

El diseño del itinerario visual se mantiene igual que en V4, pero las seis fotos del capítulo especial fueron reemplazadas por **archivos locales reales** provistos por el usuario.

### Qué cambió

- `data.js` ahora referencia rutas locales dentro de `assets/gran-viaje-2026/`.
- `descargar_fotos.py` ya no descarga imágenes externas: valida que los seis archivos estén presentes.
- `assets/gran-viaje-2026/FUENTES_Y_LICENCIAS.md` documenta que las fotos fueron aportadas por el usuario.

### Verificación rápida

Podés ejecutar:

```bash
python descargar_fotos.py
```

para comprobar que las seis imágenes del capítulo especial están disponibles localmente.


## V6: recuerdos reales integrados

Se integraron 41 fotos JPEG en color, distribuidas en diez carpetas de recuerdos. Cada carpeta incluye `portada.jpg` y `recuerdo-01.jpg` etc., con rutas ya configuradas en `data.js`. Las imágenes provienen de los JPEG compartidos por el usuario por destino (sin conversión desde HEIC). La portada se muestra una sola vez; el resto aparece en la galería.

**Selección de portada:** MDQ 2024 foto grupal con medallas; Tandil foto grupal de carrera; Mendoza lago; MDQ II restaurante; Brasil Cristo Redentor; Chile restaurante; Pinamar playa; Iguazú gran catarata; Salta cañón; MDQ III vista al mar.

El Gran Viaje 2026 y las seis fotos locales entregadas en V5 se conservaron. La revelación de Río 2027 permanece sin cambios.


## V8 · Mobile First equilibrado
Los diez recuerdos muestran título, frase, portada limitada en altura y una tira horizontal de fotografías secundarias; se desplaza con el dedo sin abrir cada foto. La vista ampliada sigue disponible. Las fotos usan object-fit: contain para evitar cortes y la navegación conserva el resto de la experiencia. El itinerario 2026 y el regalo Río 2027 no se alteraron.


## V9 · Una sola foto por capítulo

Cada uno de los diez capítulos históricos muestra únicamente `cover` de `data.js`, sin galería. El diseño prioriza móvil: título y mensaje compactos, fotografía completa y proporcionada, con fondo desenfocado de la misma imagen para evitar barras vacías en fotografías verticales. Las fotografías secundarias siguen en `assets/` por seguridad, pero no aparecen en la interfaz. El capítulo especial y el final no se modificaron.


## V9 · Corrección de proporción y encuadre de portadas

Esta versión ajusta exclusivamente la **fotografía principal** de los diez capítulos históricos. El contenedor de portada ahora se adapta a la orientación real de cada imagen (vertical, horizontal o cuadrada), eliminando los fondos desenfocados y las franjas laterales.

- Portadas verticales: contenedor vertical con ancho máximo controlado.
- Portadas horizontales: contenedor horizontal más amplio.
- La imagen llena el recuadro sin deformarse.
- El resto del proyecto permanece igual.


## V10 · Revelación final de Río de Janeiro 2027

La pantalla final del regalo fue rediseñada para convertir la revelación de **Río de Janeiro 2027** en el momento más impactante de la experiencia. Se reemplazó el bloque con emojis por una fotografía real de Río integrada como archivo local en `assets/rio-2027/rio-de-janeiro.jpg`, se sumó una secuencia automática de aparición del destino y del año, un confeti moderado y un sello decorativo estilo pasaporte con el detalle del regalo.
