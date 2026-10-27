  function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/consultorio/bajaid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function baja_id(event) {
        event.preventDefault();

        let formulario = event.target; // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/consultorio/baja/${idejs}`;
        formulario.submit();
    }

     function busc_num(event) {
        event.preventDefault();
        let idejs = document.getElementById('num').value;
        window.location.href = `/consultorio/bajanum/${idejs}`;
        document.getElementById('num').value = "";   
        }

    function baja_num(event) {
        event.preventDefault();

        let formulario = event.target; // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="num"]').value;

        formulario.action = `/consultorio/baja/${idejs}`;
        formulario.submit();
    }