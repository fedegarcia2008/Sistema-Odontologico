 function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/turno/bajaid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function baja_id(event) {
        event.preventDefault();

        let formulario = event.target; // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/turno/baja/${idejs}`;
        formulario.submit();
    }

     function busc_fechas(event) {
        event.preventDefault();
        let idejs1 = document.getElementById('fecha1').value;
        let idejs2 = document.getElementById('fecha2').value;
        window.location.href =  `/turno/bajafechas/${idejs1}/${idejs2}`;
        document.getElementById('fecha1').value = "";   
        document.getElementById('fecha2').value = "";  
        }

    function baja_fechas(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs1 = formulario.querySelector('[name="fecha1"]').value;
        let idejs2 = formulario.querySelector('[name="fecha2"]').value;

        formulario.action = `/turno/bajafechas/${idejs}/${idejs2}`;
        formulario.submit();
    }


    let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 3);
   
 });

    let fecha = document.querySelector('[name="fecha"]'); 

    let hoy = new Date(); // Obtiene la fecha actual
    let anio = hoy.getFullYear(); 
    let mes = String(hoy.getMonth() + 1).padStart(2, "0"); 
    let dia = String(hoy.getDate()).padStart(2, "0"); 

    fecha.min = anio + "-" + mes + "-" + dia; // No permite seleccionar fechas anteriores a hoy