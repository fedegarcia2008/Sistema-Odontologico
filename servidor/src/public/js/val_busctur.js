
    function busc_form(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/turno/buscarid/${idejs}`;
        document.getElementById('clave').value = "";        
    }

let idOdo = document.querySelector('[name="idOdo"]');

    idOdo.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });