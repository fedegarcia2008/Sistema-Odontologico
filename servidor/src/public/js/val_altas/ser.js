let clave = document.querySelector('[name="clave"]');

    clave.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

let idOdo = document.querySelector('[name="idOdo"]');

    idOdo.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

 let costo = document.querySelector('[name="costo"]');

    costo.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 8);
   
 });


let servicio = document.querySelector('[name="nombre"]');
let lista = document.querySelector("#listaServicios");

let servicios = [
    "Consulta odontológica general",
    "Primera consulta odontológica",
    "Control odontológico",
    "Diagnóstico odontológico",
    "Limpieza dental",
    "Profilaxis dental",
    "Aplicación de flúor",
    "Selladores dentales",
    "Eliminación de sarro",
    "Tratamiento de caries",
    "Restauración dental",
    "Empaste dental",
    "Reconstrucción dental",
    "Blanqueamiento dental",
    "Diseño de sonrisa",
    "Carillas dentales",
    "Cierre de diastemas",
    "Tratamiento de sensibilidad dental",
    "Tratamiento de conducto",
    "Retratamiento endodóntico",
    "Extracción dental",
    "Extracción de muela del juicio",
    "Extracción de dientes retenidos",
    "Cirugía bucal",
    "Cirugía periodontal",
    "Tratamiento de gingivitis",
    "Tratamiento de periodontitis",
    "Limpieza periodontal profunda",
    "Raspado y alisado radicular",
    "Injerto de encía",
    "Colocación de brackets",
    "Ortodoncia con alineadores",
    "Control de ortodoncia",
    "Retiro de brackets",
    "Colocación de retenedores",
    "Tratamiento de maloclusiones",
    "Odontología infantil",
    "Tratamiento de caries infantiles",
    "Extracción de dientes de leche",
    "Aplicación de flúor infantil",
    "Corona dental",
    "Puente dental",
    "Prótesis dental fija",
    "Prótesis dental removible",
    "Prótesis dental completa",
    "Reparación de prótesis dental",
    "Colocación de implantes dentales",
    "Corona sobre implante",
    "Injerto óseo dental",
    "Regeneración ósea",
    "Radiografía periapical",
    "Radiografía panorámica",
    "Tomografía dental",
    "Estudio de ortodoncia",
    "Tratamiento de bruxismo",
    "Placa de relajación",
    "Evaluación de la articulación temporomandibular",
    "Tratamiento de traumatismos dentales",
    "Atención de urgencias odontológicas",
    "Tratamiento de abscesos dentales",
    "Tratamiento de fracturas dentales",
    "Evaluación de lesiones bucales",
    "Biopsia bucal",
    "Tratamiento de aftas bucales",
    "Tratamiento de boca seca",
    "Frenectomía",
    "Apicectomía",
    "Alargamiento coronario",
    "Gingivectomía",
    "Gingivoplastia",
    "Rehabilitación oral",
    "Rehabilitación sobre implantes",
    "Protectores bucales deportivos",
    "Consulta odontológica a domicilio",
    "Evaluación odontológica prequirúrgica",
    "Mantenimiento de implantes dentales",
    "Mantenimiento periodontal",
    "Control de prótesis dentales",
    "Tratamiento de lesiones de la mucosa oral"
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
        opcion.classList.add("opcion");

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