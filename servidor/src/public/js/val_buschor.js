 function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/horario/buscarid/${idejs}`;
        document.getElementById('clave').value = "";        
    }

    function busc_odo(event) {
        event.preventDefault();
        let idejs = document.getElementById('idOdo').value;
        window.location.href = `/horario/buscarodontologo/${idejs}`;
        document.getElementById('idOdo').value = "";        
    }
let idOdo = document.querySelector('[name="idOdo"]');

    idOdo.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });