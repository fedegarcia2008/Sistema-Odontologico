let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
});

let tipo = document.querySelector('[name="tipo"]');

    tipo.addEventListener("input", function () {
        this.value = this.value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, "")
            .replace(/\s{2,}/g, " ")
            .toLowerCase()
            .replace(/(^|\s)\S/g, function (letra) {
                return letra.toUpperCase();
            });
    });

let idCons = document.querySelector('[name="idCons"]');

    idCons.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });
