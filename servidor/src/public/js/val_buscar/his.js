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



let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });


    let fecha = document.querySelector('[name="fecha"]'); // Busca el campo fecha

    let hoy = new Date(); // Obtiene la fecha actual
    let anio = hoy.getFullYear(); // Obtiene el año
    let mes = String(hoy.getMonth() + 1).padStart(2, "0"); // Obtiene el mes
    let dia = String(hoy.getDate()).padStart(2, "0"); // Obtiene el día

    fecha.max = anio + "-" + mes + "-" + dia; // No permite fechas posteriores a hoy


let idAfi = document.querySelector('[name="idAfi"]');

    idAfi.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 8);
   
        if (this.value.length < 8) {
        this.setCustomValidity("La C.I. debe contener exactamente 8 números.");
    } else {
        this.setCustomValidity("");
    }
 });

 let idOdo = document.querySelector('[name="idOdo"]');

    idOdo.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

let idTur = document.querySelector('[name="idTur"]');

    idTur.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

