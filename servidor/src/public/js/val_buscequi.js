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
    let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
});