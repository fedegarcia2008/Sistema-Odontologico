function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/equipamiento/buscarid/${idejs}`;
        document.getElementById('clave').value = "";        
    }
    function busc_fecha(event) {
        event.preventDefault();
        let idejs = document.getElementById('fecha').value;
        window.location.href = `/equipamiento/buscarfecha/${idejs}`;
        document.getElementById('fecha').value = "";        
    }

    function busc_cons(event) {
        event.preventDefault();
        let idejs = document.getElementById('idCons').value;
        window.location.href = `/equipamiento/buscarconsultorio/${idejs}`;
        document.getElementById('idCons').value = "";        
    }
    let clave = document.querySelector('[name="clave"]');

 