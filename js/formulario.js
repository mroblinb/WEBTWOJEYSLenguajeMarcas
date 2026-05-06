document.querySelector(".formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    let errores = [];

    // === CAMPOS ===

    let nombre = document.getElementById("nombre").value.trim();
    let apellidos = document.getElementById("apellidos").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let edad = document.getElementById("edad").value.trim();
    let pais = document.getElementById("pais").value;
    let mensaje = document.getElementById("mensaje").value.trim();
    let razon = document.getElementById("razon").value;
    let marcas = document.getElementById("marcas").value.trim();
    let descubrimiento = document.getElementById("descubrimiento").value.trim();
    let privacidad = document.getElementById("privacidad").checked;

    // VALIDACIONES GENERALES

    if (nombre.length < 2) errores.push("Nombre demasiado corto");
    if (apellidos.length < 2) errores.push("Apellidos demasiado cortos");
    if (mensaje.length < 5) errores.push("Mensaje demasiado corto");

    //VALIDACIÓN EMAIL (5+)

    if (email.length < 6) errores.push("Email demasiado corto");
    if (!email.includes("@")) errores.push("Email debe contener @");
    if (!email.includes(".")) errores.push("Email debe contener un punto");
    if (email.startsWith("@") || email.endsWith("@")) {
        errores.push("Email no puede empezar o terminar con @");
    }
    if (email.includes(" ")) errores.push("Email no puede contener espacios");
    // dominio básico
    if (!(email.endsWith(".com") || email.endsWith(".es") || email.endsWith(".net"))) {
        errores.push("Dominio de email no válido");
    }

    //  EDAD

    let edadNumero = Number(edad);
    if (edad === "" || isNaN(edadNumero)) {
        errores.push("Edad debe ser un número");
    } else if (edadNumero < 18 || edadNumero > 99) {
        errores.push("Edad debe estar entre 18 y 99");
    }

    // TELÉFONO

    if (telefono.length !== 9) {
        errores.push("Teléfono debe tener 9 dígitos");
    }
    // comprobar que todos son números (sin regex)
    for (let i = 0; i < telefono.length; i++) {
        let caracter = telefono[i];
        if (caracter < "0" || caracter > "9") {
            errores.push("Teléfono solo puede contener números");
            break;
        }
    }

    //  SELECT

    if (pais === "") errores.push("Selecciona un país");
    if (razon === "") errores.push("Selecciona una razón");

    // 🔒 CHECKBOX

    if (!privacidad) {
        errores.push("Debes aceptar la política de privacidad");
    }

    //  RESULTADO

    if (errores.length > 0) {
        alert(errores.join("\n"));
    } else {
        alert("Formulario enviado correctamente ✅");
        this.submit(); // ahora sí envía
    }
});