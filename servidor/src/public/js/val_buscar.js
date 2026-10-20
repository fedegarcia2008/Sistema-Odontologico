    function busc_form(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/afiliado/buscarid/${idejs}`;
        document.getElementById('clave').value = "";        
    }

let clave = document.querySelector('[name="clave"]');


    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 10);
    });

    // revisar el maximo de 10 caracteres