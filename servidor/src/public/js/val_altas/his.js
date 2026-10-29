let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 3);

 });

let idSer = document.querySelector('[name="idSer"]');

    idSer.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

let idAfi = document.querySelector('[name="idAfi"]');

    idAfi.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 8);
   
        if (this.value.length < 8) {
        this.setCustomValidity("La C.I. debe contener exactamente 8 números.");
    } else {
        this.setCustomValidity("");
    }
 });

let idOdo = document.querySelector('[name="idOdo"]');

    idOdo.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

let idTur = document.querySelector('[name="idTur"]');

    idTur.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

    let fecha = document.querySelector('[name="fecha"]'); // Busca el campo fecha

    let hoy = new Date(); // Obtiene la fecha actual
    let anio = hoy.getFullYear(); // Obtiene el año
    let mes = String(hoy.getMonth() + 1).padStart(2, "0"); // Obtiene el mes
    let dia = String(hoy.getDate()).padStart(2, "0"); // Obtiene el día

fecha.max = anio + "-" + mes + "-" + dia; // No permite fechas posteriores a hoy