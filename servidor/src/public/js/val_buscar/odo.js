 function busc_id(event) {
        event.preventDefault();
        let idejs = document.getElementById('clave').value;
        window.location.href = `/odontologo/buscarid/${idejs}`;
        document.getElementById('clave').value = "";        
    }

    function busc_nom(event) {
        event.preventDefault();
        let idejs = document.getElementById('nombre').value;
        window.location.href = `/odontologo/buscarnombre/${idejs}`;
        document.getElementById('nombre').value = "";        
    }

    function busc_cons(event) {
        event.preventDefault();
        let idejs = document.getElementById('cons').value;
        window.location.href = `/odontologo/buscarconsultorio/${idejs}`;
        document.getElementById('cons').value = "";        
    }

    function busc_espe(event) {
        event.preventDefault();
        let idejs = document.getElementById('espe').value;
        window.location.href = `/odontologo/buscarespecialidad/${idejs}`;
        document.getElementById('espe').value = "";        
    }

    let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });


let nombre = document.querySelector('[name="nombre"]');

    nombre.addEventListener("input", function () {
        this.value = this.value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, "")
            .replace(/\s{2,}/g, " ")
            .toLowerCase()
            .replace(/(^|\s)\S/g, function (letra) {
                return letra.toUpperCase();
            });
    });


    let idCons = document.querySelector('[name="idCons"]');

    idCons.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

let espe = document.querySelector('[name="espe"]');
let lista = document.querySelector("#listaEspecialidades");

let especialidades = [
    "Odontología general",
    "Odontología preventiva",
    "Odontología restauradora",
    "Odontología estética",
    "Odontopediatría",
    "Ortodoncia",
    "Ortopedia dentofacial",
    "Endodoncia",
    "Periodoncia",
    "Implantología dental",
    "Cirugía bucal",
    "Cirugía maxilofacial",
    "Prótesis dental",
    "Prostodoncia",
    "Rehabilitación oral",
    "Odontogeriatría",
    "Odontología para pacientes con discapacidad",
    "Odontología hospitalaria",
    "Odontología deportiva",
    "Odontología del sueño",
    "Odontología comunitaria",
    "Odontología familiar",
    "Odontología laboral",
    "Medicina bucal",
    "Patología bucal",
    "Radiología odontológica",
    "Diagnóstico por imágenes odontológicas",
    "Oclusión y trastornos temporomandibulares",
    "Odontología mínimamente invasiva",
    "Odontología legal y forense"
];

espe.addEventListener("input", function () {
    let texto = this.value.toLowerCase();

    lista.innerHTML = "";

    if (texto === "") {
        lista.style.display = "none";
        return;
    }

    let resultados = especialidades.filter(function (nombre) {
        return nombre.toLowerCase().includes(texto);
    });

    resultados.forEach(function (nombre) {
        let opcion = document.createElement("div");

        opcion.textContent = nombre;
        opcion.classList.add("opcion");

        opcion.addEventListener("click", function () {
            espe.value = nombre;
            lista.style.display = "none";
        });

        lista.appendChild(opcion);
    });

    lista.style.display = resultados.length > 0 ? "block" : "none";
});

document.addEventListener("click", function (e) {
    if (!espe.contains(e.target) && !lista.contains(e.target)) {
        lista.style.display = "none";
    }
});

espe.addEventListener("blur", function () {
    let existe = especialidades.some(function (nombre) {
        return nombre.toLowerCase() === espe.value.toLowerCase();
    });

    if (espe.value !== "" && !existe) {
        espe.setCustomValidity("Seleccioná una especialidad válida de la lista.");
    } else {
        espe.setCustomValidity("");
    }
});