  function busc_form(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/servicio/buscarid/${idejs}`;
        document.getElementById('clave').value = "";        
    }

      function busc_nom(event) {
        event.preventDefault();
        let idejs = document.getElementById('nom').value;
        window.location.href = `/servicio/buscarnombre/${idejs}`;
        document.getElementById('nom').value = "";        
    }

let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });