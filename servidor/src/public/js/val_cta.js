let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
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