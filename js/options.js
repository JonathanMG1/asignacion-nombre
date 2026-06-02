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
  // =========================
  // EliteBook Serie 600
  // =========================
  { value: "ELITEBOOK630G9", label: "EliteBook 630 G9" },
  { value: "ELITEBOOK630G10", label: "EliteBook 630 G10" },
  { value: "ELITEBOOK630G11", label: "EliteBook 630 G11" },

  { value: "ELITEBOOK635AEROG8", label: "EliteBook 635 Aero G8" },
  { value: "ELITEBOOK635AEROG9", label: "EliteBook 635 Aero G9" },

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

  // =========================
  // EliteBook Serie 800
  // =========================
  { value: "ELITEBOOK830G8", label: "EliteBook 830 G8" },
  { value: "ELITEBOOK830G9", label: "EliteBook 830 G9" },
  { value: "ELITEBOOK830G10", label: "EliteBook 830 G10" },
  { value: "ELITEBOOK830G11", label: "EliteBook 830 G11" },

  { value: "ELITEBOOK835G8", label: "EliteBook 835 G8" },
  { value: "ELITEBOOK835G9", label: "EliteBook 835 G9" },
  { value: "ELITEBOOK835G10", label: "EliteBook 835 G10" },
  { value: "ELITEBOOK835G11", label: "EliteBook 835 G11" },

  { value: "ELITEBOOK840G8", label: "EliteBook 840 G8" },
  { value: "ELITEBOOK840G9", label: "EliteBook 840 G9" },
  { value: "ELITEBOOK840G10", label: "EliteBook 840 G10" },
  { value: "ELITEBOOK840G11", label: "EliteBook 840 G11" },

  { value: "ELITEBOOK845G8", label: "EliteBook 845 G8" },
  { value: "ELITEBOOK845G9", label: "EliteBook 845 G9" },
  { value: "ELITEBOOK845G10", label: "EliteBook 845 G10" },
  { value: "ELITEBOOK845G11", label: "EliteBook 845 G11" },

  { value: "ELITEBOOK850G8", label: "EliteBook 850 G8" },
  { value: "ELITEBOOK850G9", label: "EliteBook 850 G9" },
  { value: "ELITEBOOK850G10", label: "EliteBook 850 G10" },
  { value: "ELITEBOOK850G11", label: "EliteBook 850 G11" },

  { value: "ELITEBOOK855G8", label: "EliteBook 855 G8" },
  { value: "ELITEBOOK855G9", label: "EliteBook 855 G9" },
  { value: "ELITEBOOK855G10", label: "EliteBook 855 G10" },
  { value: "ELITEBOOK855G11", label: "EliteBook 855 G11" },

  { value: "ELITEBOOK860G9", label: "EliteBook 860 G9" },
  { value: "ELITEBOOK860G10", label: "EliteBook 860 G10" },
  { value: "ELITEBOOK860G11", label: "EliteBook 860 G11" },

  { value: "ELITEBOOK865G9", label: "EliteBook 865 G9" },
  { value: "ELITEBOOK865G10", label: "EliteBook 865 G10" },
  { value: "ELITEBOOK865G11", label: "EliteBook 865 G11" },

  // =========================
  // Elite x360
  // =========================
  { value: "ELITEX360830G8", label: "Elite x360 830 G8" },
  { value: "ELITEX360830G9", label: "Elite x360 830 G9" },
  { value: "ELITEX360830G10", label: "Elite x360 830 G10" },

  { value: "ELITEX360840G8", label: "Elite x360 840 G8" },
  { value: "ELITEX360840G9", label: "Elite x360 840 G9" },
  { value: "ELITEX360840G10", label: "Elite x360 840 G10" },

  { value: "ELITEX3601040G8", label: "Elite x360 1040 G8" },
  { value: "ELITEX3601040G9", label: "Elite x360 1040 G9" },
  { value: "ELITEX3601040G10", label: "Elite x360 1040 G10" },
  { value: "ELITEX3601040G11", label: "Elite x360 1040 G11" },

  // =========================
  // Dragonfly
  // =========================
  { value: "ELITEDRAGONFLYG2", label: "Elite Dragonfly G2" },
  { value: "DRAGONFLYG3", label: "Dragonfly G3" },
  { value: "DRAGONFLYG4", label: "Dragonfly G4" },

  // =========================
  // ProBook Serie 400
  // =========================
  { value: "PROBOOK430G8", label: "ProBook 430 G8" },
  { value: "PROBOOK430G9", label: "ProBook 430 G9" },
  { value: "PROBOOK430G10", label: "ProBook 430 G10" },
  { value: "PROBOOK430G11", label: "ProBook 430 G11" },

  { value: "PROBOOK435G8", label: "ProBook 435 G8" },
  { value: "PROBOOK435G9", label: "ProBook 435 G9" },
  { value: "PROBOOK435G10", label: "ProBook 435 G10" },
  { value: "PROBOOK435G11", label: "ProBook 435 G11" },

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
  { value: "PROBOOK450G11", label: "ProBook 450 G11" },

  { value: "PROBOOK455G8", label: "ProBook 455 G8" },
  { value: "PROBOOK455G9", label: "ProBook 455 G9" },
  { value: "PROBOOK455G10", label: "ProBook 455 G10" },
  { value: "PROBOOK455G11", label: "ProBook 455 G11" },

  { value: "PROBOOK460G11", label: "ProBook 460 G11" },
  { value: "PROBOOK465G11", label: "ProBook 465 G11" },

  // =========================
  // ProBook Serie 600
  // =========================
  { value: "PROBOOK640G8", label: "ProBook 640 G8" },
  { value: "PROBOOK640G9", label: "ProBook 640 G9" },
  { value: "PROBOOK640G10", label: "ProBook 640 G10" },

  { value: "PROBOOK645G8", label: "ProBook 645 G8" },
  { value: "PROBOOK645G9", label: "ProBook 645 G9" },
  { value: "PROBOOK645G10", label: "ProBook 645 G10" },

  { value: "PROBOOK650G8", label: "ProBook 650 G8" },
  { value: "PROBOOK650G9", label: "ProBook 650 G9" },
  { value: "PROBOOK650G10", label: "ProBook 650 G10" },

  { value: "PROBOOK655G8", label: "ProBook 655 G8" },
  { value: "PROBOOK655G9", label: "ProBook 655 G9" },
  { value: "PROBOOK655G10", label: "ProBook 655 G10" },

  // =========================
  // ZBook
  // =========================
  { value: "ZBOOKFIREFLY14G8", label: "ZBook Firefly 14 G8" },
  { value: "ZBOOKFIREFLY14G9", label: "ZBook Firefly 14 G9" },
  { value: "ZBOOKFIREFLY14G10", label: "ZBook Firefly 14 G10" },
  { value: "ZBOOKFIREFLY14G11", label: "ZBook Firefly 14 G11" },

  { value: "ZBOOKFIREFLY16G9", label: "ZBook Firefly 16 G9" },
  { value: "ZBOOKFIREFLY16G10", label: "ZBook Firefly 16 G10" },
  { value: "ZBOOKFIREFLY16G11", label: "ZBook Firefly 16 G11" },

  { value: "ZBOOKPOWERG9", label: "ZBook Power G9" },
  { value: "ZBOOKPOWERG10", label: "ZBook Power G10" },
  { value: "ZBOOKPOWERG11", label: "ZBook Power G11" },

  { value: "ZBOOKSTUDIOG9", label: "ZBook Studio G9" },
  { value: "ZBOOKSTUDIOG10", label: "ZBook Studio G10" },
  { value: "ZBOOKSTUDIOG11", label: "ZBook Studio G11" },

  { value: "ZBOOKFURYG9", label: "ZBook Fury G9" },
  { value: "ZBOOKFURYG10", label: "ZBook Fury G10" },
  { value: "ZBOOKFURYG11", label: "ZBook Fury G11" },

  // =========================
  // Otros corporativos
  // =========================
  { value: "ELITEFOLIO", label: "Elite Folio" },
  { value: "PROX2360", label: "Pro x360 435" },
  { value: "PROX2360435G10", label: "Pro x360 435 G10" },
  { value: "PROX2360435G11", label: "Pro x360 435 G11" },

   // =========================
// EliteBook Serie 700 (AMD)
// =========================
{ value: "ELITEBOOK735G5", label: "EliteBook 735 G5" },
{ value: "ELITEBOOK735G6", label: "EliteBook 735 G6" },
{ value: "ELITEBOOK735G7", label: "EliteBook 735 G7" },
{ value: "ELITEBOOK735G8", label: "EliteBook 735 G8" },

{ value: "ELITEBOOK745G5", label: "EliteBook 745 G5" },
{ value: "ELITEBOOK745G6", label: "EliteBook 745 G6" },
{ value: "ELITEBOOK745G7", label: "EliteBook 745 G7" },
{ value: "ELITEBOOK745G8", label: "EliteBook 745 G8" },

{ value: "ELITEBOOK755G5", label: "EliteBook 755 G5" },
{ value: "ELITEBOOK755G6", label: "EliteBook 755 G6" },
{ value: "ELITEBOOK755G7", label: "EliteBook 755 G7" },
{ value: "ELITEBOOK755G8", label: "EliteBook 755 G8" },

// =========================
// EliteBook Serie 800 G5-G7
// =========================
{ value: "ELITEBOOK830G5", label: "EliteBook 830 G5" },
{ value: "ELITEBOOK830G6", label: "EliteBook 830 G6" },
{ value: "ELITEBOOK830G7", label: "EliteBook 830 G7" },

{ value: "ELITEBOOK840G5", label: "EliteBook 840 G5" },
{ value: "ELITEBOOK840G6", label: "EliteBook 840 G6" },
{ value: "ELITEBOOK840G7", label: "EliteBook 840 G7" },

{ value: "ELITEBOOK850G5", label: "EliteBook 850 G5" },
{ value: "ELITEBOOK850G6", label: "EliteBook 850 G6" },
{ value: "ELITEBOOK850G7", label: "EliteBook 850 G7" },

{ value: "ELITEBOOK835G7", label: "EliteBook 835 G7" },
{ value: "ELITEBOOK845G7", label: "EliteBook 845 G7" },
{ value: "ELITEBOOK855G7", label: "EliteBook 855 G7" },

// =========================
// ProBook 300 Series
// =========================
{ value: "PROBOOK340G7", label: "ProBook 340 G7" },
{ value: "PROBOOK340G8", label: "ProBook 340 G8" },

{ value: "PROBOOK345G7", label: "ProBook 345 G7" },
{ value: "PROBOOK345G8", label: "ProBook 345 G8" },
{ value: "PROBOOK345G9", label: "ProBook 345 G9" },
{ value: "PROBOOK345G10", label: "ProBook 345 G10" },
{ value: "PROBOOK345G11", label: "ProBook 345 G11" },

{ value: "PROBOOK350G7", label: "ProBook 350 G7" },
{ value: "PROBOOK350G8", label: "ProBook 350 G8" },

{ value: "PROBOOK355G7", label: "ProBook 355 G7" },
{ value: "PROBOOK355G8", label: "ProBook 355 G8" },
{ value: "PROBOOK355G9", label: "ProBook 355 G9" },
{ value: "PROBOOK355G10", label: "ProBook 355 G10" },
{ value: "PROBOOK355G11", label: "ProBook 355 G11" },

// =========================
// HP 200 Series
// =========================
{ value: "HP240G7", label: "HP 240 G7" },
{ value: "HP240G8", label: "HP 240 G8" },
{ value: "HP240G9", label: "HP 240 G9" },
{ value: "HP240G10", label: "HP 240 G10" },

{ value: "HP245G7", label: "HP 245 G7" },
{ value: "HP245G8", label: "HP 245 G8" },
{ value: "HP245G9", label: "HP 245 G9" },
{ value: "HP245G10", label: "HP 245 G10" },

{ value: "HP250G7", label: "HP 250 G7" },
{ value: "HP250G8", label: "HP 250 G8" },
{ value: "HP250G9", label: "HP 250 G9" },
{ value: "HP250G10", label: "HP 250 G10" },
{ value: "HP250G11", label: "HP 250 G11" },

{ value: "HP255G7", label: "HP 255 G7" },
{ value: "HP255G8", label: "HP 255 G8" },
{ value: "HP255G9", label: "HP 255 G9" },
{ value: "HP255G10", label: "HP 255 G10" },
{ value: "HP255G11", label: "HP 255 G11" },

// =========================
// HP 400 Series
// =========================
{ value: "HP470G7", label: "HP 470 G7" },
{ value: "HP470G8", label: "HP 470 G8" },
{ value: "HP470G9", label: "HP 470 G9" },
{ value: "HP470G10", label: "HP 470 G10" },
{ value: "HP470G11", label: "HP 470 G11" },

// =========================
// ZBook antiguas
// =========================
{ value: "ZBOOK15G5", label: "ZBook 15 G5" },
{ value: "ZBOOK15G6", label: "ZBook 15 G6" },

{ value: "ZBOOKSTUDIOG5", label: "ZBook Studio G5" },
{ value: "ZBOOKSTUDIOG6", label: "ZBook Studio G6" },

{ value: "ZBOOKFIREFLY14G7", label: "ZBook Firefly 14 G7" },
{ value: "ZBOOKFIREFLY15G7", label: "ZBook Firefly 15 G7" },

{ value: "ZBOOKPOWERG7", label: "ZBook Power G7" },
{ value: "ZBOOKPOWERG8", label: "ZBook Power G8" },

{ value: "ZBOOKFURYG7", label: "ZBook Fury G7" },
{ value: "ZBOOKFURYG8", label: "ZBook Fury G8" } 
]
  
 
 
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
