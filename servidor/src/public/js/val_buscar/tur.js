
    function busc_id(event) {
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

    function busc_fechas(event) {
        event.preventDefault();
        let idejs1 = document.getElementById('fecha1').value;
        let idejs2 = document.getElementById('fecha2').value;
        window.location.href = `/turno/buscarperiodo/${idejs1}/${idejs2}`;
        document.getElementById('fecha1').value = "";
        document.getElementById('fecha2').value = "";    
    }

    function busc_odo(event) {
        event.preventDefault();
        let idejs = document.getElementById('idOdo').value;
        window.location.href = `/turno/buscarodontologo/${idejs}`;
        document.getElementById('idOdo').value = "";        
    }

    function busc_afi(event) {
        event.preventDefault();
        let idejs = document.getElementById('idAfi').value;
        window.location.href = `/turno/buscarafiliado/${idejs}`;
        document.getElementById('idAfi').value = "";        
    }

let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

let idOdo = document.querySelector('[name="idOdo"]');

    idOdo.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

    let idAfi = document.querySelector('[name="idAfi"]');

    idAfi.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 8);
   
        if (this.value.length < 8) {
        this.setCustomValidity("La C.I. debe contener exactamente 8 números.");
    } else {
        this.setCustomValidity("");
    }
 });