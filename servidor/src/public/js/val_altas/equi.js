let clave = document.querySelector('[name="clave"]');

clave.addEventListener("input", function () { 
    let valor = this.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    let letras = valor.replace(/[0-9]/g, "").slice(0, 2); 
    let numeros = valor.replace(/[A-Z]/g, "").slice(0, 4); 

    this.value = letras + (numeros ? "-" + numeros : ""); 
});

clave.addEventListener("blur", function () { // Se ejecuta cuando salís del campo
    let partes = this.value.split("-"); 
    if (partes.length === 2 && partes[1] !== "") { // Comprueba que haya letras y números
        this.value = partes[0] + "-" + partes[1].padStart(4, "0"); // Completa los números con ceros hasta llegar a 4
    }
});

let tipo = document.querySelector('[name="tipo"]');

    tipo.addEventListener("input", function () {
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

let equipamiento = document.querySelector('[name="tipo"]');
let lista = document.querySelector("#listaEquipamiento");

let equipamientos = [
    "Sillón odontológico",
    "Unidad odontológica",
    "Lámpara odontológica",
    "Lámpara de fotocurado",
    "Compresor odontológico",
    "Sistema de aspiración",
    "Eyector de saliva",
    "Aspirador quirúrgico",
    "Escupidera odontológica",
    "Taburete odontológico",
    "Banqueta para odontólogo",
    "Banqueta para asistente",
    "Mesa auxiliar odontológica",
    "Carrito odontológico",
    "Mueble odontológico",
    "Armario para instrumental",
    "Negatoscopio",
    "Equipo de rayos X intraoral",
    "Equipo de radiografía panorámica",
    "Equipo de tomografía dental",
    "Sensor radiográfico digital",
    "Placa de fósforo radiográfica",
    "Escáner intraoral",
    "Escáner facial",
    "Cámara intraoral",
    "Cámara fotográfica odontológica",
    "Monitor odontológico",
    "Computadora para consultorio",
    "Impresora",
    "Impresora 3D dental",
    "Fresadora dental",
    "Localizador apical",
    "Motor de endodoncia",
    "Sistema de obturación endodóntica",
    "Pieza de mano de alta velocidad",
    "Micromotor odontológico",
    "Contraángulo odontológico",
    "Pieza de mano recta",
    "Turbina odontológica",
    "Ultrasonido odontológico",
    "Cavitador ultrasónico",
    "Equipo de profilaxis dental",
    "Arenadora dental",
    "Pulidora dental",
    "Lámpara de blanqueamiento dental",
    "Lámpara de fotopolimerización",
    "Electrobisturí odontológico",
    "Bisturí eléctrico",
    "Motor quirúrgico para implantología",
    "Motor de cirugía oral",
    "Sistema de irrigación quirúrgica",
    "Equipo de sedación consciente",
    "Monitor multiparamétrico",
    "Oxímetro de pulso",
    "Tensiómetro digital",
    "Desfibrilador externo automático",
    "Botiquín de emergencias",
    "Resucitador manual",
    "Esterilizador odontológico",
    "Autoclave",
    "Selladora de bolsas de esterilización",
    "Cuba de ultrasonidos para limpieza instrumental",
    "Lavadora de instrumental",
    "Termodesinfectadora",
    "Destilador de agua",
    "Sistema de ósmosis inversa",
    "Bandejas de instrumental",
    "Contenedores para instrumental esterilizado",
    "Contenedores para residuos patológicos",
    "Contenedores para objetos punzocortantes",
    "Dispensador de guantes",
    "Dispensador de barbijos",
    "Dispensador de alcohol",
    "Dispensador de jabón",
    "Dispensador de toallas descartables",
    "Lámpara de examen clínico",
    "Lupas odontológicas",
    "Microscopio odontológico",
    "Microscopio endodóntico",
    "Articulador dental",
    "Arco facial odontológico",
    "Vibrador de yeso",
    "Recortadora de modelos dentales",
    "Mezcladora de alginato",
    "Mezcladora de yeso",
    "Horno para cerámica dental",
    "Horno de sinterización de zirconio",
    "Equipo de termoformado dental",
    "Termoformadora para placas dentales",
    "Vibrador para prótesis dentales",
    "Paralelómetro dental",
    "Olla de presión para acrílicos",
    "Aspirador de laboratorio dental",
    "Sillón para sala de espera",
    "Escritorio de recepción",
    "Computadora de recepción",
    "Teléfono de recepción",
    "Impresora multifunción",
    "Aire acondicionado",
    "Purificador de aire",
    "Sistema de ventilación",
    "Generador eléctrico de respaldo",
    "Sistema de iluminación auxiliar",
    "Cámara de seguridad",
    "Sistema de alarma"
];

equipamiento.addEventListener("input", function () {
    let texto = this.value.toLowerCase();

    lista.innerHTML = "";

    if (texto === "") {
        lista.style.display = "none";
        return;
    }

    let resultados = equipamientos.filter(function (tipo) {
        return tipo.toLowerCase().includes(texto);
    });

    resultados.forEach(function (tipo) {
        let opcion = document.createElement("div");

        opcion.textContent = tipo;
        opcion.classList.add("opcion");

        opcion.addEventListener("click", function () {
            equipamiento.value = tipo;
            lista.style.display = "none";
        });

        lista.appendChild(opcion);
    });

    lista.style.display = resultados.length > 0 ? "block" : "none";
});

document.addEventListener("click", function (e) {
    if (!equipamiento.contains(e.target) && !lista.contains(e.target)) {
        lista.style.display = "none";
    }
});

    let fecha = document.querySelector('[name="fecha"]'); 

    let hoy = new Date(); // Obtiene la fecha actual
    let anio = hoy.getFullYear(); 
    let mes = String(hoy.getMonth() + 1).padStart(2, "0");
    let dia = String(hoy.getDate()).padStart(2, "0"); 

    fecha.max = anio + "-" + mes + "-" + dia; // No permite fechas posteriores a hoy

