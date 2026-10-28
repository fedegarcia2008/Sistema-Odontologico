function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/afiliado/buscarid/${idejs}`;
        document.getElementById('clave').value = "";        
    }

        function busc_nom(event) {
        event.preventDefault();
        let idejs = document.getElementById('nombre').value;
        window.location.href = `/afiliado/buscarnombre/${idejs}`;
        document.getElementById('nombre').value = "";        
    }

    function busc_plan(event) {
        event.preventDefault();
        let idejs = document.getElementById('plan').value;
        window.location.href = `/afiliado/buscartipoplan/${idejs}`;
        document.getElementById('plan').value = "";        
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
