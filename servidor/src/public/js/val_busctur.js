
    function busc_form(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/turno/buscarid/${idejs}`;
        document.getElementById('clave').value = "";        
    }

    function busc_fecha(event) {
        event.preventDefault();
        let idejs = document.getElementById('fecha').value;
        window.location.href = `/turno/buscarfecha/${idejs}`;
        document.getElementById('fecha').value = "";        
    }
let idOdo = document.querySelector('[name="idOdo"]');

    idOdo.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });