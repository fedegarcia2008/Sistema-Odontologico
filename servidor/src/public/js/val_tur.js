let idOdo = document.querySelector('[name="idOdo"]');

    idOdo.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

let idAfi = document.querySelector('[name="idafi"]');

    idAfi.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });