 function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/horario/modificarid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function mod_id(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/horario/modificar/${idejs}`;
        formulario.submit();
    }

         function busc_dia(event) {
        event.preventDefault();
        let idejs = document.getElementById('dia').value;
        window.location.href = `/horario/modificardia/${idejs}`;
        document.getElementById('dia').value = "";   
        }

    function mod_dia(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="dia"]').value;

        formulario.action = `/horario/modificar/${idejs}`;
        formulario.submit();
    }