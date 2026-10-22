 function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/historiaclinica/buscarid/${idejs}`;
        document.getElementById('clave').value = "";        
    }
    function busc_fecha(event) {
        event.preventDefault();
        let idejs = document.getElementById('fecha').value;
        window.location.href = `/historiaclinica/buscarfecha/${idejs}`;
        document.getElementById('fecha').value = "";        
    }
let idSer = document.querySelector('[name="idSer"]');

    idSer.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });
