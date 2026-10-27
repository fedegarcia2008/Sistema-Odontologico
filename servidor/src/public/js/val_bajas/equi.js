function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/equipamiento/bajaid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function baja_id(event) {
        event.preventDefault();

        let formulario = event.target; // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/equipamiento/baja/${idejs}`;
        formulario.submit();
    }

     function busc_tipo(event) {
        event.preventDefault();
        let idejs = document.getElementById('tipo').value;
        window.location.href = `/equipamiento/bajatipo/${idejs}`;
        document.getElementById('tipo').value = "";   
        }

    function baja_tipo(event) {
        event.preventDefault();

        let formulario = event.target; // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="tipo"]').value;

        formulario.action = `/equipamiento/baja/${idejs}`;
        formulario.submit();
    }