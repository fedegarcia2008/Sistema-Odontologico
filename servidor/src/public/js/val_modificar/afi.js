 function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/afiliado/modificarid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function mod_id(event) {
        event.preventDefault();

        let formulario = event.target;  // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/afiliado/modificar/${idejs}`;  // ruta
        formulario.submit();  // envio de datos
    }

    function busc_nom(event) {
        event.preventDefault();
        let idejs = document.getElementById('nombre').value;
        window.location.href = `/afiliado/modificarnombre/${idejs}`;
        document.getElementById('nombre').value = "";   
        }

    function mod_nom(event) {
        event.preventDefault();

        let formulario = event.target;  // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="nombre"]').value;

        formulario.action = `/afiliado/modificar/${idejs}`;  // ruta
        formulario.submit();  // envio de datos
    }
