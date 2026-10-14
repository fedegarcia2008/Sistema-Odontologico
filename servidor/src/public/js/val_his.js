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