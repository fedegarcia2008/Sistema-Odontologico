function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/odontologo/modificarid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function mod_id(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/odontologo/modificar/${idejs}`;
        formulario.submit();
    }

    function busc_nom(event) {
        event.preventDefault();
        let idejs = document.getElementById('nombre').value;
        window.location.href = `/odontologo/modificarnombre/${idejs}`;
        document.getElementById('nombre').value = "";   
        }
        
    function mod_nom(event) {
        event.preventDefault();

        let formulario = event.target;  // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="nombre"]').value;

        formulario.action = `/odontologo/modificar/${idejs}`;  // ruta
        formulario.submit();  // envio de datos
    }


         let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });


    let nombre = document.querySelector('[name="nombre"]');

    nombre.addEventListener("input", function () {
        this.value = this.value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, "")
            .replace(/\s{2,}/g, " ")
            .toLowerCase()
            .replace(/(^|\s)\S/g, function (letra) {
                return letra.toUpperCase();
            });
    });