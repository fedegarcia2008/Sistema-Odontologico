 function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/horario/modificarid/${idejs}`;
        document.getElementById('clave').value = "";   
        }

    function mod_id(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="clave"]').value;

        formulario.action = `/horario/modificar/${idejs}`;
        formulario.submit();
    }

         function busc_dia(event) {
        event.preventDefault();
        let idejs = document.getElementById('dia').value;
        window.location.href = `/horario/modificardia/${idejs}`;
        document.getElementById('dia').value = "";   
        }

    function mod_dia(event) {
        event.preventDefault();

        let formulario = event.target;
        let idejs = formulario.querySelector('[name="dia"]').value;

        formulario.action = `/horario/modificar/${idejs}`;
        formulario.submit();
    }

    let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

    
    let horaIn = document.querySelector('[name="horaIn"]'); 
    let horaFi = document.querySelector('[name="horaFi"]'); 

    horaIn.min = "08:00"; 
    horaIn.max = "20:00"; 
    horaIn.step = "300"; // Permite intervalos de 5 minutos, EN SEGUNDOS

    horaFi.min = "08:00"; 
    horaFi.max = "20:00"; 
    horaFi.step = "300"; // Permite intervalos de 5 minutos, EN SEGUNDOS

    function validarHorarios() {
    horaIn.setCustomValidity(""); 
    horaFi.setCustomValidity(""); 

    if (horaIn.value === "" || horaFi.value === "") return; // Espera a que se completen ambos campos

    let inicio = horaIn.value.split(":"); // Separa horas y minutos del inicio
    let final = horaFi.value.split(":"); // Separa horas y minutos del final

    let minutosIn = Number(inicio[0]) * 60 + Number(inicio[1]); // Convierte el inicio a minutos
    let minutosFi = Number(final[0]) * 60 + Number(final[1]); // Convierte el final a minutos

    if (minutosFi - minutosIn < 120) { // Comprueba que haya al menos 2 horas
        horaFi.setCustomValidity("Debe haber al menos 2 horas entre el inicio y el final.");
    }
}

horaIn.addEventListener("input", validarHorarios); 
horaFi.addEventListener("input", validarHorarios); 