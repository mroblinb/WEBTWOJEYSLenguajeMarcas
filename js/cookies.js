// Constantes (esto lo prefiero asi que se me hace más fácil mediante constantes y dandoles un nombre y no poniendo todo el rato IDs)
const overlay = document.getElementById("cookies-overlay");
const accept = document.getElementById("aceptar");
const reject = document.getElementById("denegar");

if (overlay && accept && reject) {

    overlay.classList.remove("invisible");

    accept.addEventListener("click", () => {
        console.log("Cookies aceptadas");
        overlay.classList.add("invisible");
    });

    reject.addEventListener("click", () => {
        console.log("Cookies denegadas");
        overlay.classList.add("invisible");
    });

}