let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 8);
   
        if (this.value.length < 8) {
        this.setCustomValidity("La C.I. debe contener exactamente 8 números.");
    } else {
        this.setCustomValidity("");
    }
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