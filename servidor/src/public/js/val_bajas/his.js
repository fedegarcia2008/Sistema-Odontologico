function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/historiaclinica/bajaid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function baja_id(event) {
        event.preventDefault();

        let formulario = event.target; // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/historiaclinica/baja/${idejs}`;
        formulario.submit();
    }


            function busc_afi(event) {
        event.preventDefault();
        let idejs = document.getElementById('idAfi').value;
        window.location.href = `/historiaclinica/bajaafiliado/${idejs}`;
        document.getElementById('idAfi').value = "";   
        }

    function baja_afi(event) {
        event.preventDefault();

        let formulario = event.target; // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="idAfi"]').value;

        formulario.action = `/historiaclinica/baja/${idejs}`;
        formulario.submit();
    }

    let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 3);

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