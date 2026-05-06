const tallas = document.querySelectorAll(".talla");
const textoBtn = document.querySelector(".boton-texto");

let tallaSeleccionada = null;

tallas.forEach(talla => {
    talla.addEventListener("click", () => {

        tallas.forEach(t => t.classList.remove("activa"));
        talla.classList.add("activa");

        tallaSeleccionada = talla.textContent;

        textoBtn.textContent = `AGREGAR AL CARRITO`;

    });
});

const img = document.querySelector(".zoom");

// crear overlay dinámico
const overlayZoom = document.createElement("div");
overlayZoom.classList.add("overlay-zoom");
document.body.appendChild(overlayZoom);

let isZoomed = false;

img.addEventListener("click", () => {
    isZoomed = !isZoomed;

    if (isZoomed) {
        img.classList.add("fullscreen");
        overlayZoom.classList.add("active");
        document.body.style.overflow = "hidden"; // bloquea scroll
    } else {
        img.classList.remove("fullscreen");
        overlayZoom.classList.remove("active");
        document.body.style.overflow = "";
    }
});

// cerrar si haces click fuera de la imagen
overlayZoom.addEventListener("click", () => {
    img.classList.remove("fullscreen");
    overlayZoom.classList.remove("active");
    document.body.style.overflow = "";
    isZoomed = false;
});