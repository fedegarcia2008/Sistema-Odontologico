let clave = document.querySelector('[name="clave"]');

clave.addEventListener("input", function () { 
    let valor = this.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    let letras = valor.replace(/[0-9]/g, "").slice(0, 2); 
    let numeros = valor.replace(/[A-Z]/g, "").slice(0, 4); 

    this.value = letras + (numeros ? "-" + numeros : ""); 
});

clave.addEventListener("blur", function () { // Se ejecuta cuando salís del campo
    let partes = this.value.split("-"); 
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
    let fecha = document.querySelector('[name="fecha"]'); 

    let hoy = new Date(); // Obtiene la fecha actual
    let anio = hoy.getFullYear(); 
    let mes = String(hoy.getMonth() + 1).padStart(2, "0");
    let dia = String(hoy.getDate()).padStart(2, "0"); 

    fecha.max = anio + "-" + mes + "-" + dia; // No permite fechas posteriores a hoy