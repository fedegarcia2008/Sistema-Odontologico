function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/cuentacorriente/bajaid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function baja_id(event) {
        event.preventDefault();

        let formulario = event.target; // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/cuentacorriente/baja/${idejs}`;
        formulario.submit();
    }


    function busc_nom(event) {
        event.preventDefault();
        let idejs = document.getElementById('nombre').value;
        window.location.href = `/cuentacorriente/bajanom/${idejs}`;
        document.getElementById('nombre').value = "";   
        }

    function baja_nom(event) {
        event.preventDefault();

        let formulario = event.target; // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="nombre"]').value;

        formulario.action = `/cuentacorriente/baja/${idejs}`;
        formulario.submit();
    }


       let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 8);
   
        if (this.value.length < 8) {
        this.setCustomValidity("La C.I. debe contener exactamente 8 números.");
    } else {
        this.setCustomValidity("");
    }
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