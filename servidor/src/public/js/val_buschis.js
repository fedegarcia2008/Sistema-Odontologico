 function busc_form(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/historiaclinica/buscarid/${idejs}`;
        document.getElementById('clave').value = "";        
    }
let idSer = document.querySelector('[name="idSer"]');

    idSer.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });
