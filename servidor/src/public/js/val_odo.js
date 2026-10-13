let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
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
    "Odontología",
    "Ortodoncia",
    "Endodoncia",
    "Periodoncia",
    "Implantología",
    "Odontopediatría",
    "Cirugía bucal"
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
        opcion.classList.add("opcion-especialidad");

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