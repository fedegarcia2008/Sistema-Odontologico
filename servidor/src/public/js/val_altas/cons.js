let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

    let nCons = document.querySelector('[name="nCons"]');

    nCons.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 3);
   
 });
