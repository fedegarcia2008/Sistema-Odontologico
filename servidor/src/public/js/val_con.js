let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

let nombre = document.querySelector('[name="nombre"]');

    nombre.addEventListener("input", function () {
        this.value = this.value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, "")
            .replace(/\s{2,}/g, " ")
            .toLowerCase()
            .replace(/(^|\s)\S/g, function (letra) {
                return letra.toUpperCase();
            });
    });

let rebaja = document.querySelector('[name="rebaja"]');

rebaja.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9,]/g, "");

    let partes = this.value.split(",");

    if (partes.length > 2) {
        this.value = partes[0] + "," + partes.slice(1).join("");
    }

    partes = this.value.split(",");

    if (partes.length === 2) {
        this.value = partes[0] + "," + partes[1].slice(0, 2);
    }
});