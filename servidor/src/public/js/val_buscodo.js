 function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/odontologo/buscarid/${idejs}`;
        document.getElementById('clave').value = "";        
    }
    function busc_nom(event) {
        event.preventDefault();
        let idejs = document.getElementById('nombre').value;
        window.location.href = `/odontologo/buscarnombre/${idejs}`;
        document.getElementById('nombre').value = "";        
    }

    function busc_cons(event) {
        event.preventDefault();
        let idejs = document.getElementById('cons').value;
        window.location.href = `/odontologo/buscarconsultorio/${idejs}`;
        document.getElementById('cons').value = "";        
    }

    function busc_espe(event) {
        event.preventDefault();
        let idejs = document.getElementById('espe').value;
        window.location.href = `/odontologo/buscarespecialidad/${idejs}`;
        document.getElementById('espe').value = "";        
    }

    let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });