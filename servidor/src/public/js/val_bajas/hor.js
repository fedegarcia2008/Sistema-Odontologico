 function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/horario/bajaid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function baja_id(event) {
        event.preventDefault();

        let formulario = event.target; // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/horario/baja/${idejs}`;
        formulario.submit();
    }

    function busc_dia(event) {
        event.preventDefault();
        let idejs = document.getElementById('dia').value;
        window.location.href = `/horario/bajadia/${idejs}`;
        document.getElementById('dia').value = "";   
        }

    function baja_dia(event) {
        event.preventDefault();

        let formulario = event.target; // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="dia"]').value;

        formulario.action = `/horario/baja/${idejs}`;
        formulario.submit();
    }