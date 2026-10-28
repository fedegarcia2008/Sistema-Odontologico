let idOdo = document.querySelector('[name="idOdo"]');

    idOdo.addEventListener("input", function () {
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

 let fecha = document.querySelector('[name="fecha"]'); // Busca el campo fecha

    let hoy = new Date(); // Obtiene la fecha actual
    let anio = hoy.getFullYear(); // Obtiene el año actual
    let mes = String(hoy.getMonth() + 1).padStart(2, "0"); // Obtiene el mes
    let dia = String(hoy.getDate()).padStart(2, "0"); // Obtiene el día

    fecha.min = anio + "-" + mes + "-" + dia; // No permite seleccionar fechas anteriores a hoy
