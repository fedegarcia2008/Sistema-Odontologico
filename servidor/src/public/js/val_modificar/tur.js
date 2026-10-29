function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/turno/modificarid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function mod_id(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/turno/modificar/${idejs}`;
        formulario.submit();
    }

         function busc_fechas(event) {
        event.preventDefault();
        let idejs1 = document.getElementById('fecha1').value;
        let idejs2 = document.getElementById('fecha2').value;
        window.location.href =  `/turno/modificarperiodo/${idejs1}/${idejs2}`;
        document.getElementById('fecha1').value = "";   
        document.getElementById('fecha2').value = "";  
        }

    function mod_fechas(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs1 = formulario.querySelector('[name="fecha1"]').value;
        let idejs2 = formulario.querySelector('[name="fecha2"]').value;

        formulario.action = `/turno/modificarperiodo/${idejs}/${idejs2}`;
        formulario.submit();
    }

    let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
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