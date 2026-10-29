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

    let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 3);
   
        if (this.value.length < 3) {
        this.setCustomValidity("El ID debe contener exactamente 3 números.");
    } else {
        this.setCustomValidity("");
    }
 });

let nombre = document.querySelector('[name="nom"]');

    nombre.addEventListener("input", function () {
        this.value = this.value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, "")
            .replace(/\s{2,}/g, " ")
            .toLowerCase()
            .replace(/(^|\s)\S/g, function (letra) {
                return letra.toUpperCase();
            });
    });