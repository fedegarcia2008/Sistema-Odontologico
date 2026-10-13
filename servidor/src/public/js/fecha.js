let fecha = document.querySelector('[name="fecha"]');
    let fechaEnTexto = document.getElementById("fechaEnTexto");

    fechaNacimiento.addEventListener("change", function () {
        if (!this.value) {
            fechaEnTexto.textContent = "";
            return;
        }
        let fecha = new Date(this.value);
        fechaEnTexto.textContent = fecha.toLocaleDateString("es-AR", {
            day: "numeric",
            month: "long",
            year: "numeric",
            timeZone: "UTC"
        });
    });