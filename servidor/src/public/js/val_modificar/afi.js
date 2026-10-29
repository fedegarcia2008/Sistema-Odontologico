 function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/afiliado/modificarid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function mod_id(event) {
        event.preventDefault();

        let formulario = event.target;  // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/afiliado/modificar/${idejs}`;  // ruta
        formulario.submit();  // envio de datos
    }

    function busc_nom(event) {
        event.preventDefault();
        let idejs = document.getElementById('nombre').value;
        window.location.href = `/afiliado/modificarnombre/${idejs}`;
        document.getElementById('nombre').value = "";   
        }

    function mod_nom(event) {
        event.preventDefault();

        let formulario = event.target;  // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="nombre"]').value;

        formulario.action = `/afiliado/modificar/${idejs}`;  // ruta
        formulario.submit();  // envio de datos
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

    let nombres = document.querySelectorAll('[name="nombre"]');

    nombres.forEach(function (nombre) {
    nombre.addEventListener("input", function () {
        this.value = this.value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, "")
            .replace(/\s{2,}/g, " ")
            .toLowerCase()
            .replace(/(^|\s)\S/g, function (letra) {
                return letra.toUpperCase();
            });
    });
});


  let apellido = document.querySelector('[name="apellido"]');

    apellido.addEventListener("input", function () {
        this.value = this.value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, "")
            .replace(/\s{2,}/g, " ")
            .toLowerCase()
            .replace(/(^|\s)\S/g, function (letra) {
                return letra.toUpperCase();
            });
    });

        let telefonoCelular = document.querySelector('[name="telCelular"]');

    telefonoCelular.addEventListener("input", function () {
    let numeros = this.value.replace(/\D/g, "");
    let formato = numeros.slice(0, 2);

    if (numeros.length > 2) {
        formato += " " + numeros.slice(2, 6);
    }

    if (numeros.length > 6) {
        formato += "-" + numeros.slice(6, 12);
    }

    this.value = formato;
});


    let telefonoFijo = document.querySelector('[name="telFijo"]');

telefonoFijo.addEventListener("input", function () {
    let numeros = this.value.replace(/\D/g, "").slice(0, 8);

    if (numeros.length > 4) {
        this.value = numeros.slice(0, 4) + "-" + numeros.slice(4);
    } else {
        this.value = numeros;
    }
});
