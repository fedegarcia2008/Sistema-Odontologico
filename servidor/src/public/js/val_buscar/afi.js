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
        this.value = this.value.replace(/\D/g, "").slice(0, 10);
    });

    // revisar el maximo de 10 caracteres