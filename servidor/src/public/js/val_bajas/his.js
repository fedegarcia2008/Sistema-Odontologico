function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/historiaclinica/bajaid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function baja_id(event) {
        event.preventDefault();

        let formulario = event.target; // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/historiaclinica/baja/${idejs}`;
        formulario.submit();
    }


            function busc_afi(event) {
        event.preventDefault();
        let idejs = document.getElementById('idAfi').value;
        window.location.href = `/historiaclinica/bajaafiliado/${idejs}`;
        document.getElementById('idAfi').value = "";   
        }

    function baja_afi(event) {
        event.preventDefault();

        let formulario = event.target; // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="idAfi"]').value;

        formulario.action = `/historiaclinica/baja/${idejs}`;
        formulario.submit();
    }