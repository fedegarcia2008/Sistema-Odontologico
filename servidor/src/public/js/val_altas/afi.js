let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 8);
   
        if (this.value.length < 8) {
        this.setCustomValidity("La C.I. debe contener exactamente 8 números.");
    } else {
        this.setCustomValidity("");
    }
 });

let nombre = document.querySelector('[name="nombre"]');
let apellido = document.querySelector('[name="apellido"]');

    nombre.addEventListener("input", function () {
        this.value = this.value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, "")
            .replace(/\s{2,}/g, " ")
            .toLowerCase()
            .replace(/(^|\s)\S/g, function (letra) {
                return letra.toUpperCase();
            });
    });

    apellido.addEventListener("input", function () {
        this.value = this.value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, "")
            .replace(/\s{2,}/g, " ")
            .toLowerCase()
            .replace(/(^|\s)\S/g, function (letra) {
                return letra.toUpperCase();
            });
    });

let telefonoFijo = document.querySelector('[name="telFijo"]');

telefonoFijo.addEventListener("input", function () {
    let numeros = this.value.replace(/\D/g, "").slice(0, 8);

    if (numeros.length > 4) {
        this.value = numeros.slice(0, 4) + "-" + numeros.slice(4);
    } else {
        this.value = numeros;
    }
});

let telefonoCelular = document.querySelector('[name="telCelular"]');

telefonoCelular.addEventListener("input", function () {
    let numeros = this.value.replace(/\D/g, "");
    let formato = numeros.slice(0, 2);

    if (numeros.length > 2) {
        formato += " " + numeros.slice(2, 6);
    }

    if (numeros.length > 6) {
        formato += "-" + numeros.slice(6, 12);
    }

    this.value = formato;
});
