function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/convenio/modificarid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function mod_id(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/convenio/modificar/${idejs}`;
        formulario.submit();
    }

     function busc_nom(event) {
        event.preventDefault();
        let idejs = document.getElementById('nombre').value;
        window.location.href = `/convenio/modificarnom/${idejs}`;
        document.getElementById('nombre').value = "";        
    }

    function mod_nom(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="nombre"]').value;

        formulario.action = `/convenio/modificar/${idejs}`;
        formulario.submit();
    }