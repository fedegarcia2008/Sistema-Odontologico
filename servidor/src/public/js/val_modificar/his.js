 function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/historiaclinica/modificarid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function mod_id(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/historiaclinica/modificar/${idejs}`;
        formulario.submit();
    }


            function busc_afi(event) {
        event.preventDefault();
        let idejs = document.getElementById('idAfi').value;
        window.location.href = `/historiaclinica/modificarafiliado/${idejs}`;
        document.getElementById('idAfi').value = "";   
        }

    function mod_afi(event) {
        event.preventDefault();

        let formulario = event.target;  // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="idAfi"]').value;

        formulario.action = `/historiaclinica/modificar/${idejs}`;  // ruta
        formulario.submit();  // envio de datos
    }