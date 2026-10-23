        function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/consultorio/buscarid/${idejs}`;
        document.getElementById('clave').value = "";        
    }

        function busc_num(event) {
        event.preventDefault();
        let idejs = document.getElementById('cons').value;
        window.location.href = `/consultorio/buscarconsultorio/${idejs}`;
        document.getElementById('cons').value = "";        
    }

    let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });