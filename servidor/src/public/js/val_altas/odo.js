let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 3);
   
        if (this.value.length < 3) {
        this.setCustomValidity("El ID debe contener exactamente 3 números.");
    } else {
        this.setCustomValidity("");
    }
 });

let nombre = document.querySelector('[name="nombre"]');
let apellido = document.querySelector('[name="apellido"]');

    nombre.addEventListener("input", function () {
        this.value = this.value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, "")
            .replace(/\s{2,}/g, " ")
            .toLowerCase()
            .replace(/(^|\s)\S/g, function (letra) {
                return letra.toUpperCase();
            });
    });

    apellido.addEventListener("input", function () {
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


let especialidad = document.querySelector('[name="especialidad"]');
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

especialidad.addEventListener("input", function () {
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
            especialidad.value = nombre;
            lista.style.display = "none";
        });

        lista.appendChild(opcion);
    });

    lista.style.display = resultados.length > 0 ? "block" : "none";
});

document.addEventListener("click", function (e) {
    if (!especialidad.contains(e.target) && !lista.contains(e.target)) {
        lista.style.display = "none";
    }
});

especialidad.addEventListener("blur", function () {
    let existe = especialidades.some(function (nombre) {
        return nombre.toLowerCase() === especialidad.value.toLowerCase();
    });

    if (especialidad.value !== "" && !existe) {
        especialidad.setCustomValidity("Seleccioná una especialidad válida de la lista.");
    } else {
        especialidad.setCustomValidity("");
    }
});