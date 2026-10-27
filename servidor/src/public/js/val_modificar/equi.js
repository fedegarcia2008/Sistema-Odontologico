function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/equipamiento/modificarid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function mod_id(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/equipamiento/modificar/${idejs}`;
        formulario.submit();
    }

     function busc_tipo(event) {
        event.preventDefault();
        let idejs = document.getElementById('tipo').value;
        window.location.href = `/equipamiento/modificartipo/${idejs}`;
        document.getElementById('tipo').value = "";   
        }

    function mod_tipo(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="tipo"]').value;

        formulario.action = `/equipamiento/modificar/${idejs}`;
        formulario.submit();
    }