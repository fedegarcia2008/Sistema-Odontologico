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

 // fecha
 let fecha = document.querySelector('[name="fecha"]'); 

    let hoy = new Date(); // Obtiene la fecha actual
    let anio = hoy.getFullYear(); 
    let mes = String(hoy.getMonth() + 1).padStart(2, "0"); 
    let dia = String(hoy.getDate()).padStart(2, "0"); 

    fecha.min = anio + "-" + mes + "-" + dia; // No permite seleccionar fechas anteriores a hoy


    // hora
    let hora = document.querySelector('[name="hora"]'); // Busca el campo hora

    hora.min = "08:00"; 
    hora.max = "20:00"; 
    hora.step = "300"; // Permite intervalos de 5 minutos, esta en segunndos

hora.addEventListener("input", function () { 
    if (this.value < "08:00" || this.value > "20:00") { // Comprueba el rango horario
        this.setCustomValidity("El turno debe ser entre las 08:00 y las 20:00.");
    } else if (this.validity.stepMismatch) { // Comprueba si respeta los intervalos de 5 minutos
        this.setCustomValidity("El horario debe ser múltiplo de 5 minutos.");
    } else {
        this.setCustomValidity(""); // saca el mensaje si la hora es válida
    }
});