let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

let idOdo = document.querySelector('[name="idOdo"]');

    idOdo.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

// FALTA COSTO


let servicio = document.querySelector('[name="nombre"]');
let lista = document.querySelector("#listaServicios");

let servicios = [
    "Odontología",
    "Ortodoncia",
    "Endodoncia",
    "Periodoncia",
    "Implantología",
    "Odontopediatría",
    "Cirugía bucal"
];

servicio.addEventListener("input", function () {
    let texto = this.value.toLowerCase();

    lista.innerHTML = "";

    if (texto === "") {
        lista.style.display = "none";
        return;
    }

    let resultados = servicios.filter(function (nombre) {
        return nombre.toLowerCase().includes(texto);
    });

    resultados.forEach(function (nombre) {
        let opcion = document.createElement("div");

        opcion.textContent = nombre;
        opcion.classList.add("opcion-servicio");

        opcion.addEventListener("click", function () {
            servicio.value = nombre;
            lista.style.display = "none";
        });

        lista.appendChild(opcion);
    });

    lista.style.display = resultados.length > 0 ? "block" : "none";
});

document.addEventListener("click", function (e) {
    if (!servicio.contains(e.target) && !lista.contains(e.target)) {
        lista.style.display = "none";
    }
});