
    function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/cuentacorriente/buscarid/${idejs}`;
        document.getElementById('clave').value = "";        
    }

     function busc_idhis(event) {
        event.preventDefault();
        let idejs = document.getElementById('clavehis').value;
        window.location.href = `/cuentacorriente/buscaridhis/${idejs}`;
        document.getElementById('clavehis').value = "";        
    }

    function busc_nom(event) {
        event.preventDefault();
        let idejs = document.getElementById('nombre').value;
        window.location.href = `/cuentacorriente/buscarnom/${idejs}`;
        document.getElementById('nombre').value = "";        
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

 let clavehis = document.querySelector('[name="clavehis"]');

    clavehis.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 3);
   
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

    