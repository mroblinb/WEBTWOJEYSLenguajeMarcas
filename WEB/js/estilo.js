const intro = document.getElementById("intro");

setTimeout(() => {
    intro.classList.add("fade-out");

    setTimeout(() => {
        intro.style.display = "none";
    }, 400);

}, 3000); // 1 segundo (está en milisegundos)