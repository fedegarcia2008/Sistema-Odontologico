let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

    let nCons = document.querySelector('[name="nCons"]');

    nCons.addEventListener("input", function () {
        let numeros = this.value.replace(/\D/g, "");
        if (numeros.length > 2) {
            this.value = numeros.slice(0, -2) + " " + numeros.slice(-2);
        } else {
            this.value = numeros;
        }
    });

let idLocal = document.querySelector('[name="idLocal"]');

    idLocal.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });