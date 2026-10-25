let fecha1 = document.querySelector('[name="fecha1"]');

    fecha1.addEventListener("input", function () {
        
   

        if (this.value) {
        this.setCustomValidity("La C.I. debe contener exactamente 8 números.");
    } else {
        this.setCustomValidity("");
    }
 }); 
    
    
    
    function busc_fechas(event) {
        event.preventDefault();
        let idejs1 = document.getElementById('fecha1').value;
        let idejs2 = document.getElementById('fecha2').value;
        window.location.href = `/consulta/tratamiento/${idejs1}/${idejs2}`;
        document.getElementById('fecha1').value = "";
        document.getElementById('fecha2').value = "";    
    }