let clave = document.querySelector('[name="clave"]'); // Busca el campo llamado "clave"

clave.addEventListener("input", function () { // Se ejecuta cada vez que escribís
    let valor = this.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Pasa a mayúsculas y elimina símbolos
    let letras = valor.replace(/[0-9]/g, "").slice(0, 2); // Deja solo letras y permite máximo 2
    let numeros = valor.replace(/[A-Z]/g, "").slice(0, 4); // Deja solo números y permite máximo 4

    this.value = letras + (numeros ? "-" + numeros : ""); // Une las letras y los números con un guion
});

clave.addEventListener("blur", function () { // Se ejecuta cuando salís del campo
    let partes = this.value.split("-"); // Separa las letras de los números usando el guion

    if (partes.length === 2 && partes[1] !== "") { // Comprueba que haya letras y números
        this.value = partes[0] + "-" + partes[1].padStart(4, "0"); // Completa los números con ceros hasta llegar a 4
    }
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
