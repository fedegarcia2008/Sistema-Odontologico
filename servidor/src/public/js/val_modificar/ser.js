 function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/servicio/modificarid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function mod_id(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/servicio/modificar/${idejs}`;
        formulario.submit();
    }

    function busc_ser(event) {
        event.preventDefault();
        let idejs = document.getElementById('nom').value;
        window.location.href = `/servicio/modificarservicio/${idejs}`;
        document.getElementById('nom').value = "";        
    }

    function mod_ser(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="nom"]').value;

        formulario.action = `/servicio/modificar/${idejs}`;
        formulario.submit();
    }

