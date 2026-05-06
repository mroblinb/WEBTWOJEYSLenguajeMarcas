let count = 1;

const numero = document.getElementById("numero");
const mas = document.getElementById("mas");
const menos = document.getElementById("menos");

// Botón +
document.getElementById("mas").addEventListener("click", () => {
    count++;
    numero.textContent = count;
    actualizarPrecios();
});

// Botón -
document.getElementById("menos").addEventListener("click", () => {
    if (count > 1) {
        count--;
        numero.textContent = count;
        actualizarPrecios();
    }
});

const track = document.getElementById("track");
const Derecha = document.getElementById("derecha");
const Izquierda = document.getElementById("izquierda");

//------------------------------------------------------------Slider--------------------------------------
let index = 0;
const totalSlides = document.querySelectorAll(".slide").length;

Derecha.addEventListener("click", () => {
    index++;
    if (index >= totalSlides) index = 0;
    actualizarSlider();
});

Izquierda.addEventListener("click", () => {
    index--;
    if (index < 0) index = totalSlides - 1;
    actualizarSlider();
});

function actualizarSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

// --------------------------------------------------------------Precios---------------------------------------

// Precio base (sin símbolo €)
const precioBase = 80;

// Constantes (DOM)
const precioProducto = document.getElementById("precio-producto");
const precioTotal = document.getElementById("p2");

// Función para actualizar precios
function actualizarPrecios() {
    const total = precioBase * count;

    // Precio del producto
    precioProducto.textContent = total + "€";

    // Precio botón pagar
    precioTotal.textContent = total.toFixed(2) + "€";
}

let tiempo = 600; // 10 minutos = 600 segundos

const contador = document.getElementById("contador");

function actualizarContador() {
    let minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;

    // formato 09:05
    segundos = segundos < 10 ? "0" + segundos : segundos;

    contador.textContent = minutos + ":" + segundos;

    if (tiempo <= 0) {
        clearInterval(intervalo);
        window.location.href = "index.html";
    }

    tiempo--;
}

const intervalo = setInterval(actualizarContador, 1000);

// iniciar inmediatamente
actualizarContador();

actualizarPrecios();
