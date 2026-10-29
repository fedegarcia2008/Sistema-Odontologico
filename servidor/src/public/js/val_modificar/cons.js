    function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/consultorio/modificarid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function mod_id(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/consultorio/modificar/${idejs}`;
        formulario.submit();
    }

    function busc_num(event) {
        event.preventDefault();
        let idejs = document.getElementById('num').value;
        window.location.href = `/consultorio/modificarnum/${idejs}`;
        document.getElementById('num').value = "";   
        }

    function mod_num(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="num"]').value;

        formulario.action = `/consultorio/modificar/${idejs}`;
        formulario.submit();
    }

        
    let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

    let num = document.querySelector('[name="num"]');

    num.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });