let idOdo = document.querySelector('[name="idOdo"]');

    idOdo.addEventListener("input", function () {
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