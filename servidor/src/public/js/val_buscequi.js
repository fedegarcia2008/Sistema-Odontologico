function busc_form(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/equipamiento/buscarid/${idejs}`;
        document.getElementById('clave').value = "";        
    }

    let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
});