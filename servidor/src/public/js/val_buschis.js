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

    function busc_afi(event) {
        event.preventDefault();
        let idejs = document.getElementById('idAfi').value;
        window.location.href = `/historiaclinica/buscarafiliado/${idejs}`;
        document.getElementById('idAfi').value = "";        
    }

    function busc_odo(event) {
        event.preventDefault();
        let idejs = document.getElementById('idOdo').value;
        window.location.href = `/historiaclinica/buscarodontologo/${idejs}`;
        document.getElementById('idOdo').value = "";        
    }

    
    function busc_trat(event) {
        event.preventDefault();
        let idejs = document.getElementById('trat_rea').value;
        window.location.href = `/historiaclinica/buscartratamientorealizado/${idejs}`;
        document.getElementById('trat_rea').value = "";        
    }
let idSer = document.querySelector('[name="idSer"]');

    idSer.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });
