function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/convenio/modificarid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function mod_id(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/convenio/modificar/${idejs}`;
        formulario.submit();
    }

     function busc_nom(event) {
        event.preventDefault();
        let idejs = document.getElementById('nombre').value;
        window.location.href = `/convenio/modificarnom/${idejs}`;
        document.getElementById('nombre').value = "";        
    }

    function mod_nom(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="nombre"]').value;

        formulario.action = `/convenio/modificar/${idejs}`;
        formulario.submit();
    }

        
    let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
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

let rebaja = document.querySelector('[name="rebaja"]');

rebaja.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9,]/g, "");

    let partes = this.value.split(",");

    if (partes.length > 2) {
        this.value = partes[0] + "," + partes.slice(1).join("");
    }

    partes = this.value.split(",");

    if (partes.length === 2) {
        this.value = partes[0] + "," + partes[1].slice(0, 2);
    }
});