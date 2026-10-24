
    function busc_form(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/cuentacorriente/buscarid/${idejs}`;
        document.getElementById('clave').value = "";        
    }

     function busc_idhis(event) {
        event.preventDefault();
        let idejs = document.getElementById('clavehis').value;
        window.location.href = `/cuentacorriente/buscaridhis/${idejs}`;
        document.getElementById('clavehis').value = "";        
    }

    let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });
   

    