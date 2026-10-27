 function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/odontologo/bajaid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function baja_id(event) {
        event.preventDefault();

        let formulario = event.target; // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/odontologo/baja/${idejs}`;
        formulario.submit();
    }

    function busc_nom(event) {
        event.preventDefault();
        let idejs = document.getElementById('nom').value;
        window.location.href = `/odontologo/bajanom/${idejs}`;
        document.getElementById('nom').value = "";   
        }

    function baja_nom(event) {
        event.preventDefault();

        let formulario = event.target; // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="nom"]').value;

        formulario.action = `/odontologo/baja/${idejs}`;
        formulario.submit();
    }