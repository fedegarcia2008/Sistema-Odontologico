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