let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 3);
   
        if (this.value.length < 3) {
        this.setCustomValidity("El ID debe contener exactamente 3 números.");
    } else {
        this.setCustomValidity("");
    }
 });

let idSer = document.querySelector('[name="idSer"]');

    idSer.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

let idAfi = document.querySelector('[name="idAfi"]');

    idAfi.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

let idOdo = document.querySelector('[name="idOdo"]');

    idOdo.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

let idTur = document.querySelector('[name="idTur"]');

    idTur.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });