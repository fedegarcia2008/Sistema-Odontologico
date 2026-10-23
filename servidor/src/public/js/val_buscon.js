        function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/convenio/buscarid/${idejs}`;
        document.getElementById('clave').value = "";        
    }

     function busc_nom(event) {
        event.preventDefault();
        let idejs = document.getElementById('nombre').value;
        window.location.href = `/convenio/buscarnombre/${idejs}`;
        document.getElementById('nombre').value = "";        
    }
    

    let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });