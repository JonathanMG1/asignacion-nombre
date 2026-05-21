const TIPOS = [
  { value: "INTERNO", label: "Interno" },
  { value: "EXTERNO", label: "Externo" },
  { value: "PRACTICANTE", label: "Practicante" },
  { value: "PRESTAMO", label: "Prestamo" },
  { value: "ARRIENDO", label: "Arriendo" },
  { value: "CYBER", label: "Cyber" }
];

const EQUIPOS = [
  { value: "NOT", label: "Notebook" },
  { value: "PC", label: "PC Escritorio" },
  { value: "IMP", label: "Impresora Termica" },
  { value: "LEC", label: "Lector de codigo de Barras" },
  { value: "PDA", label: "PDA" },
];

const MARCAS = [
  { value: "LENOVO", label: "Lenovo" },
  { value: "HP", label: "HP" },
];

const MODELOS = {
  LENOVO: [
    { value: "THINKPADL14GEN6", label: "ThinkPad L14 Gen 6" },
  ],
 
  HP: [
  // — EliteBook Serie 600 —
  { value: "ELITEBOOK630G9", label: "EliteBook 630 G9" },
  { value: "ELITEBOOK630G10", label: "EliteBook 630 G10" },
  { value: "ELITEBOOK630G11", label: "EliteBook 630 G11" },
  { value: "ELITEBOOK640G9", label: "EliteBook 640 G9" },
  { value: "ELITEBOOK640G10", label: "EliteBook 640 G10" },
  { value: "ELITEBOOK640G11", label: "EliteBook 640 G11" },
  { value: "ELITEBOOK645G9", label: "EliteBook 645 G9" },
  { value: "ELITEBOOK645G10", label: "EliteBook 645 G10" },
  { value: "ELITEBOOK645G11", label: "EliteBook 645 G11" },
  { value: "ELITEBOOK650G9", label: "EliteBook 650 G9" },
  { value: "ELITEBOOK650G10", label: "EliteBook 650 G10" },
  { value: "ELITEBOOK650G11", label: "EliteBook 650 G11" },
  { value: "ELITEBOOK655G9", label: "EliteBook 655 G9" },
  { value: "ELITEBOOK655G10", label: "EliteBook 655 G10" },
  { value: "ELITEBOOK655G11", label: "EliteBook 655 G11" },
  // — EliteBook Serie 800 —
  { value: "ELITEBOOK830G8", label: "EliteBook 830 G8" },
  { value: "ELITEBOOK830G9", label: "EliteBook 830 G9" },
  { value: "ELITEBOOK830G10", label: "EliteBook 830 G10" },
  { value: "ELITEBOOK835G8", label: "EliteBook 835 G8" },
  { value: "ELITEBOOK835G9", label: "EliteBook 835 G9" },
  { value: "ELITEBOOK835G10", label: "EliteBook 835 G10" },
  { value: "ELITEBOOK840G8", label: "EliteBook 840 G8" },
  { value: "ELITEBOOK840G9", label: "EliteBook 840 G9" },
  { value: "ELITEBOOK840G10", label: "EliteBook 840 G10" },
  { value: "ELITEBOOK840G11", label: "EliteBook 840 G11" },
  { value: "ELITEBOOK845G8", label: "EliteBook 845 G8" },
  { value: "ELITEBOOK845G9", label: "EliteBook 845 G9" },
  { value: "ELITEBOOK845G10", label: "EliteBook 845 G10" },
  { value: "ELITEBOOK860G9", label: "EliteBook 860 G9" },
  { value: "ELITEBOOK860G10", label: "EliteBook 860 G10" },
  { value: "ELITEBOOK860G11", label: "EliteBook 860 G11" },
  { value: "ELITEBOOK865G9", label: "EliteBook 865 G9" },
  { value: "ELITEBOOK865G10", label: "EliteBook 865 G10" },
  { value: "ELITEBOOK865G11", label: "EliteBook 865 G11" },
  // — ProBook Serie 400 —
  { value: "PROBOOK430G8", label: "ProBook 430 G8" },
  { value: "PROBOOK430G9", label: "ProBook 430 G9" },
  { value: "PROBOOK430G10", label: "ProBook 430 G10" },
  { value: "PROBOOK440G8", label: "ProBook 440 G8" },
  { value: "PROBOOK440G9", label: "ProBook 440 G9" },
  { value: "PROBOOK440G10", label: "ProBook 440 G10" },
  { value: "PROBOOK440G11", label: "ProBook 440 G11" },
  { value: "PROBOOK445G8", label: "ProBook 445 G8" },
  { value: "PROBOOK445G9", label: "ProBook 445 G9" },
  { value: "PROBOOK445G10", label: "ProBook 445 G10" },
  { value: "PROBOOK445G11", label: "ProBook 445 G11" },
  { value: "PROBOOK450G8", label: "ProBook 450 G8" },
  { value: "PROBOOK450G9", label: "ProBook 450 G9" },
  { value: "PROBOOK450G10", label: "ProBook 450 G10" },
  { value: "PROBOOK455G8", label: "ProBook 455 G8" },
  { value: "PROBOOK455G9", label: "ProBook 455 G9" },
  { value: "PROBOOK455G10", label: "ProBook 455 G10" },
  { value: "PROBOOK460G11", label: "ProBook 460 G11" },
  { value: "PROBOOK465G11", label: "ProBook 465 G11" },
],
 
 
};


const CIUDADES = [
  {
    grupo: "Norte",
    opciones: [
      { value: "ARICA", label: "Arica - ARI" },
      { value: "IQUIQUE", label: "Iquique - IQQ" },
      { value: "CALAMA", label: "Calama - CJC" },
      { value: "ANTOFAGASTA", label: "Antofagasta - ANF" },
      { value: "COPIAPO", label: "Copiapó - CPO" },
      { value: "LA SERENA", label: "La Serena - LSC" },
      { value: "LOS ANDES", label: "Los Andes - LOB" },
      { value: "LA CALERA", label: "La Calera - ZLC" },
      { value: "VIÑA DEL MAR", label: "Viña del Mar - KNA" },
      { value: "QUILPUE", label: "Quilpúe - QPE" },
    ]
  },
  {
    grupo: "Centro",
    opciones: [
      { value: "SANTIAGO", label: "Santiago - SCL" },
      { value: "RANCAGUA", label: "Rancagua - RCG" },
      { value: "CURICO", label: "Curicó - CCO" },
      { value: "TALCA", label: "Talca - ZCA" },
      { value: "CHILLAN", label: "Chillán - YAI" },
      { value: "CONCEPCION", label: "Concepción - CCP" },
      { value: "MELIPILLA", label: "Melipilla - ZMP" },
    ]
  },
  {
    grupo: "Sur",
    opciones: [
      { value: "LOS ANGELES", label: "Los Ángeles - LSQ" },
      { value: "TEMUCO", label: "Temuco - ZCO" },
      { value: "VALDIVIA", label: "Valdivia" },
      { value: "OSORNO", label: "Osorno - ZOS" },
      { value: "PUERTO MONTT", label: "Puerto Montt - PMC" },
      { value: "CASTRO", label: "Castro - CTR" },
      { value: "COHYAIQUE", label: "Coyhaique - GXQ" },
      { value: "PUNTA ARENAS", label: "Punta Arenas - PUQ" },
    ]
  },
  {
    grupo: "HUB",
    opciones: [
      { value: "HUB", label: "HUB" },
     
    ]
  }
];

function poblarSelect(id, datos, conGrupos) {
  const select = document.getElementById(id);
  select.innerHTML = '<option value="">Seleccionar</option>';
  if (conGrupos) {
    datos.forEach(function(grupo) {
      const optgroup = document.createElement("optgroup");
      optgroup.label = "── " + grupo.grupo + " ──";
      grupo.opciones.forEach(function(op) {
        const option = document.createElement("option");
        option.value = op.value;
        option.textContent = op.label;
        optgroup.appendChild(option);
      });
      select.appendChild(optgroup);
    });
  } else {
    datos.forEach(function(op) {
      const option = document.createElement("option");
      option.value = op.value;
      option.textContent = op.label;
      select.appendChild(option);
    });
  }
}

function inicializarSelects() {
  poblarSelect("tipo", TIPOS, false);
  poblarSelect("equipo", EQUIPOS, false);
  poblarSelect("ciudad", CIUDADES, true);
  poblarSelect("marca", MARCAS, false);
}