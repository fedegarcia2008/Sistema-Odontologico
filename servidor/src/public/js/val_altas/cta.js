let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 8);
   
        if (this.value.length < 8) {
        this.setCustomValidity("La C.I. debe contener exactamente 8 números.");
    } else {
        this.setCustomValidity("");
    }
 });

 let saldo = document.querySelector('[name="saldo"]');

    saldo.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 10);
   
 });

let idTrat = document.querySelector('[name="idTrat"]');

    idTrat.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 3);
   
 });