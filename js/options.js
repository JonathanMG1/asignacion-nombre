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
   // =========================
  // EliteBook 700 Series AMD
  // =========================
  { value: "ELITEBOOK725G1", label: "EliteBook 725 G1" },
  { value: "ELITEBOOK725G2", label: "EliteBook 725 G2" },
  { value: "ELITEBOOK725G3", label: "EliteBook 725 G3" },
  { value: "ELITEBOOK725G4", label: "EliteBook 725 G4" },
  { value: "ELITEBOOK725G5", label: "EliteBook 725 G5" },
  { value: "ELITEBOOK725G6", label: "EliteBook 725 G6" },

  { value: "ELITEBOOK735G5", label: "EliteBook 735 G5" },
  { value: "ELITEBOOK735G6", label: "EliteBook 735 G6" },
  { value: "ELITEBOOK735G7", label: "EliteBook 735 G7" },
  { value: "ELITEBOOK735G8", label: "EliteBook 735 G8" },

  { value: "ELITEBOOK745G1", label: "EliteBook 745 G1" },
  { value: "ELITEBOOK745G2", label: "EliteBook 745 G2" },
  { value: "ELITEBOOK745G3", label: "EliteBook 745 G3" },
  { value: "ELITEBOOK745G4", label: "EliteBook 745 G4" },
  { value: "ELITEBOOK745G5", label: "EliteBook 745 G5" },
  { value: "ELITEBOOK745G6", label: "EliteBook 745 G6" },
  { value: "ELITEBOOK745G7", label: "EliteBook 745 G7" },
  { value: "ELITEBOOK745G8", label: "EliteBook 745 G8" },
  { value: "ELITEBOOK745G9", label: "EliteBook 745 G9" },
  { value: "ELITEBOOK745G10", label: "EliteBook 745 G10" },
  { value: "ELITEBOOK745G11", label: "EliteBook 745 G11" },

  { value: "ELITEBOOK755G1", label: "EliteBook 755 G1" },
  { value: "ELITEBOOK755G2", label: "EliteBook 755 G2" },
  { value: "ELITEBOOK755G3", label: "EliteBook 755 G3" },
  { value: "ELITEBOOK755G4", label: "EliteBook 755 G4" },
  { value: "ELITEBOOK755G5", label: "EliteBook 755 G5" },
  { value: "ELITEBOOK755G6", label: "EliteBook 755 G6" },
  { value: "ELITEBOOK755G7", label: "EliteBook 755 G7" },
  { value: "ELITEBOOK755G8", label: "EliteBook 755 G8" },

  // =========================
  // EliteBook 800 Series
  // =========================
  { value: "ELITEBOOK820G1", label: "EliteBook 820 G1" },
  { value: "ELITEBOOK820G2", label: "EliteBook 820 G2" },
  { value: "ELITEBOOK820G3", label: "EliteBook 820 G3" },
  { value: "ELITEBOOK820G4", label: "EliteBook 820 G4" },

  { value: "ELITEBOOK830G5", label: "EliteBook 830 G5" },
  { value: "ELITEBOOK830G6", label: "EliteBook 830 G6" },
  { value: "ELITEBOOK830G7", label: "EliteBook 830 G7" },
  { value: "ELITEBOOK830G8", label: "EliteBook 830 G8" },
  { value: "ELITEBOOK830G9", label: "EliteBook 830 G9" },
  { value: "ELITEBOOK830G10", label: "EliteBook 830 G10" },
  { value: "ELITEBOOK830G11", label: "EliteBook 830 G11" },

  { value: "ELITEBOOK840G1", label: "EliteBook 840 G1" },
  { value: "ELITEBOOK840G2", label: "EliteBook 840 G2" },
  { value: "ELITEBOOK840G3", label: "EliteBook 840 G3" },
  { value: "ELITEBOOK840G4", label: "EliteBook 840 G4" },
  { value: "ELITEBOOK840G5", label: "EliteBook 840 G5" },
  { value: "ELITEBOOK840G6", label: "EliteBook 840 G6" },
  { value: "ELITEBOOK840G7", label: "EliteBook 840 G7" },
  { value: "ELITEBOOK840G8", label: "EliteBook 840 G8" },
  { value: "ELITEBOOK840G9", label: "EliteBook 840 G9" },
  { value: "ELITEBOOK840G10", label: "EliteBook 840 G10" },
  { value: "ELITEBOOK840G11", label: "EliteBook 840 G11" },

  { value: "ELITEBOOK850G1", label: "EliteBook 850 G1" },
  { value: "ELITEBOOK850G2", label: "EliteBook 850 G2" },
  { value: "ELITEBOOK850G3", label: "EliteBook 850 G3" },
  { value: "ELITEBOOK850G4", label: "EliteBook 850 G4" },
  { value: "ELITEBOOK850G5", label: "EliteBook 850 G5" },
  { value: "ELITEBOOK850G6", label: "EliteBook 850 G6" },
  { value: "ELITEBOOK850G7", label: "EliteBook 850 G7" },
  { value: "ELITEBOOK850G8", label: "EliteBook 850 G8" },
  { value: "ELITEBOOK850G9", label: "EliteBook 850 G9" },
  { value: "ELITEBOOK850G10", label: "EliteBook 850 G10" },
  { value: "ELITEBOOK850G11", label: "EliteBook 850 G11" },

  { value: "ELITEBOOK835G7", label: "EliteBook 835 G7" },
  { value: "ELITEBOOK835G8", label: "EliteBook 835 G8" },
  { value: "ELITEBOOK835G9", label: "EliteBook 835 G9" },
  { value: "ELITEBOOK835G10", label: "EliteBook 835 G10" },
  { value: "ELITEBOOK835G11", label: "EliteBook 835 G11" },

  { value: "ELITEBOOK845G7", label: "EliteBook 845 G7" },
  { value: "ELITEBOOK845G8", label: "EliteBook 845 G8" },
  { value: "ELITEBOOK845G9", label: "EliteBook 845 G9" },
  { value: "ELITEBOOK845G10", label: "EliteBook 845 G10" },
  { value: "ELITEBOOK845G11", label: "EliteBook 845 G11" },

  { value: "ELITEBOOK855G7", label: "EliteBook 855 G7" },
  { value: "ELITEBOOK855G8", label: "EliteBook 855 G8" },
  { value: "ELITEBOOK855G9", label: "EliteBook 855 G9" },
  { value: "ELITEBOOK855G10", label: "EliteBook 855 G10" },
  { value: "ELITEBOOK855G11", label: "EliteBook 855 G11" },

  // =========================
  // ProBook 400 Series
  // =========================
  { value: "PROBOOK430G1", label: "ProBook 430 G1" },
  { value: "PROBOOK430G2", label: "ProBook 430 G2" },
  { value: "PROBOOK430G3", label: "ProBook 430 G3" },
  { value: "PROBOOK430G4", label: "ProBook 430 G4" },
  { value: "PROBOOK430G5", label: "ProBook 430 G5" },
  { value: "PROBOOK430G6", label: "ProBook 430 G6" },
  { value: "PROBOOK430G7", label: "ProBook 430 G7" },
  { value: "PROBOOK430G8", label: "ProBook 430 G8" },
  { value: "PROBOOK430G9", label: "ProBook 430 G9" },
  { value: "PROBOOK430G10", label: "ProBook 430 G10" },
  { value: "PROBOOK430G11", label: "ProBook 430 G11" },

  { value: "PROBOOK440G1", label: "ProBook 440 G1" },
  { value: "PROBOOK440G2", label: "ProBook 440 G2" },
  { value: "PROBOOK440G3", label: "ProBook 440 G3" },
  { value: "PROBOOK440G4", label: "ProBook 440 G4" },
  { value: "PROBOOK440G5", label: "ProBook 440 G5" },
  { value: "PROBOOK440G6", label: "ProBook 440 G6" },
  { value: "PROBOOK440G7", label: "ProBook 440 G7" },
  { value: "PROBOOK440G8", label: "ProBook 440 G8" },
  { value: "PROBOOK440G9", label: "ProBook 440 G9" },
  { value: "PROBOOK440G10", label: "ProBook 440 G10" },
  { value: "PROBOOK440G11", label: "ProBook 440 G11" },

  { value: "PROBOOK450G1", label: "ProBook 450 G1" },
  { value: "PROBOOK450G2", label: "ProBook 450 G2" },
  { value: "PROBOOK450G3", label: "ProBook 450 G3" },
  { value: "PROBOOK450G4", label: "ProBook 450 G4" },
  { value: "PROBOOK450G5", label: "ProBook 450 G5" },
  { value: "PROBOOK450G6", label: "ProBook 450 G6" },
  { value: "PROBOOK450G7", label: "ProBook 450 G7" },
  { value: "PROBOOK450G8", label: "ProBook 450 G8" },
  { value: "PROBOOK450G9", label: "ProBook 450 G9" },
  { value: "PROBOOK450G10", label: "ProBook 450 G10" },
  { value: "PROBOOK450G11", label: "ProBook 450 G11" },

  // =========================
  // HP 200 Series
  // =========================
  { value: "HP240G1", label: "HP 240 G1" },
  { value: "HP240G2", label: "HP 240 G2" },
  { value: "HP240G3", label: "HP 240 G3" },
  { value: "HP240G4", label: "HP 240 G4" },
  { value: "HP240G5", label: "HP 240 G5" },
  { value: "HP240G6", label: "HP 240 G6" },
  { value: "HP240G7", label: "HP 240 G7" },
  { value: "HP240G8", label: "HP 240 G8" },
  { value: "HP240G9", label: "HP 240 G9" },
  { value: "HP240G10", label: "HP 240 G10" },

  { value: "HP245G1", label: "HP 245 G1" },
  { value: "HP245G2", label: "HP 245 G2" },
  { value: "HP245G3", label: "HP 245 G3" },
  { value: "HP245G4", label: "HP 245 G4" },
  { value: "HP245G5", label: "HP 245 G5" },
  { value: "HP245G6", label: "HP 245 G6" },
  { value: "HP245G7", label: "HP 245 G7" },
  { value: "HP245G8", label: "HP 245 G8" },
  { value: "HP245G9", label: "HP 245 G9" },
  { value: "HP245G10", label: "HP 245 G10" },
  { value: "HP245G11", label: "HP 245 G11" },

  { value: "HP250G1", label: "HP 250 G1" },
  { value: "HP250G2", label: "HP 250 G2" },
  { value: "HP250G3", label: "HP 250 G3" },
  { value: "HP250G4", label: "HP 250 G4" },
  { value: "HP250G5", label: "HP 250 G5" },
  { value: "HP250G6", label: "HP 250 G6" },
  { value: "HP250G7", label: "HP 250 G7" },
  { value: "HP250G8", label: "HP 250 G8" },
  { value: "HP250G9", label: "HP 250 G9" },
  { value: "HP250G10", label: "HP 250 G10" },
  { value: "HP250G11", label: "HP 250 G11" },

  { value: "HP255G1", label: "HP 255 G1" },
  { value: "HP255G2", label: "HP 255 G2" },
  { value: "HP255G3", label: "HP 255 G3" },
  { value: "HP255G4", label: "HP 255 G4" },
  { value: "HP255G5", label: "HP 255 G5" },
  { value: "HP255G6", label: "HP 255 G6" },
  { value: "HP255G7", label: "HP 255 G7" },
  { value: "HP255G8", label: "HP 255 G8" },
  { value: "HP255G9", label: "HP 255 G9" },
  { value: "HP255G10", label: "HP 255 G10" },
  { value: "HP255G11", label: "HP 255 G11" },

  // =========================
  // ZBook
  // =========================
  { value: "ZBOOK14G1", label: "ZBook 14 G1" },
  { value: "ZBOOK14G2", label: "ZBook 14 G2" },
  { value: "ZBOOK14G3", label: "ZBook 14 G3" },

  { value: "ZBOOK15G1", label: "ZBook 15 G1" },
  { value: "ZBOOK15G2", label: "ZBook 15 G2" },
  { value: "ZBOOK15G3", label: "ZBook 15 G3" },
  { value: "ZBOOK15G4", label: "ZBook 15 G4" },
  { value: "ZBOOK15G5", label: "ZBook 15 G5" },
  { value: "ZBOOK15G6", label: "ZBook 15 G6" },

  { value: "ZBOOK17G1", label: "ZBook 17 G1" },
  { value: "ZBOOK17G2", label: "ZBook 17 G2" },
  { value: "ZBOOK17G3", label: "ZBook 17 G3" },
  { value: "ZBOOK17G4", label: "ZBook 17 G4" },
  { value: "ZBOOK17G5", label: "ZBook 17 G5" },
  { value: "ZBOOK17G6", label: "ZBook 17 G6" },

  { value: "ZBOOKSTUDIOG3", label: "ZBook Studio G3" },
  { value: "ZBOOKSTUDIOG4", label: "ZBook Studio G4" },
  { value: "ZBOOKSTUDIOG5", label: "ZBook Studio G5" },
  { value: "ZBOOKSTUDIOG6", label: "ZBook Studio G6" },
  { value: "ZBOOKSTUDIOG7", label: "ZBook Studio G7" },
  { value: "ZBOOKSTUDIOG8", label: "ZBook Studio G8" },
  { value: "ZBOOKSTUDIOG9", label: "ZBook Studio G9" },
  { value: "ZBOOKSTUDIOG10", label: "ZBook Studio G10" },
  { value: "ZBOOKSTUDIOG11", label: "ZBook Studio G11" },

  { value: "ZBOOKFIREFLY14G7", label: "ZBook Firefly 14 G7" },
  { value: "ZBOOKFIREFLY14G8", label: "ZBook Firefly 14 G8" },
  { value: "ZBOOKFIREFLY14G9", label: "ZBook Firefly 14 G9" },
  { value: "ZBOOKFIREFLY14G10", label: "ZBook Firefly 14 G10" },
  { value: "ZBOOKFIREFLY14G11", label: "ZBook Firefly 14 G11" },

  { value: "ZBOOKPOWERG7", label: "ZBook Power G7" },
  { value: "ZBOOKPOWERG8", label: "ZBook Power G8" },
  { value: "ZBOOKPOWERG9", label: "ZBook Power G9" },
  { value: "ZBOOKPOWERG10", label: "ZBook Power G10" },
  { value: "ZBOOKPOWERG11", label: "ZBook Power G11" },

  { value: "ZBOOKFURYG7", label: "ZBook Fury G7" },
  { value: "ZBOOKFURYG8", label: "ZBook Fury G8" },
  { value: "ZBOOKFURYG9", label: "ZBook Fury G9" },
  { value: "ZBOOKFURYG10", label: "ZBook Fury G10" },
  { value: "ZBOOKFURYG11", label: "ZBook Fury G11" },
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
