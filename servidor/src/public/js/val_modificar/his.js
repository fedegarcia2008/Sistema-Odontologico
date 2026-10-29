 function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/historiaclinica/modificarid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function mod_id(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/historiaclinica/modificar/${idejs}`;
        formulario.submit();
    }


            function busc_afi(event) {
        event.preventDefault();
        let idejs = document.getElementById('idAfi').value;
        window.location.href = `/historiaclinica/modificarafiliado/${idejs}`;
        document.getElementById('idAfi').value = "";   
        }

    function mod_afi(event) {
        event.preventDefault();

        let formulario = event.target;  // guarda en la variable formulario lo que esta dentro de <form>
        let idejs = formulario.querySelector('[name="idAfi"]').value;

        formulario.action = `/historiaclinica/modificar/${idejs}`;  // ruta
        formulario.submit();  // envio de datos
    }

    let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
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

 let fecha = document.querySelector('[name="fecha"]'); // Busca el campo fecha

    let hoy = new Date(); // Obtiene la fecha actual
    let anio = hoy.getFullYear(); // Obtiene el año
    let mes = String(hoy.getMonth() + 1).padStart(2, "0"); // Obtiene el mes
    let dia = String(hoy.getDate()).padStart(2, "0"); // Obtiene el día

fecha.max = anio + "-" + mes + "-" + dia; // No permite fechas posteriores a hoy