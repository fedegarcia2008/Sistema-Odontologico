function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/afiliado/bajaid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function baja_id(event) {
        event.preventDefault();

        let formulario = event.target; // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/afiliado/baja/${idejs}`;
        formulario.submit();
    }

    function busc_nom(event) {
        event.preventDefault();
        let idejs = document.getElementById('nombre').value;
        window.location.href = `/afiliado/bajanombre/${idejs}`;
        document.getElementById('nombre').value = "";   
        }

    function baja_nom(event) {
        event.preventDefault();

        let formulario = event.target; // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="nombre"]').value;

        formulario.action = `/afiliado/baja/${idejs}`;
        formulario.submit();
    }