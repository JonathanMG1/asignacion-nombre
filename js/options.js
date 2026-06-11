const TIPOS = [
  { value: "INTERNO", label: "Interno" },
  { value: "EXTERNO", label: "Externo" },
  { value: "PRACTICANTE", label: "Practicante" },
  { value: "PRESTAMO", label: "Prestamo" },
  { value: "ARRIENDO", label: "Arriendo" },
  { value: "CYBER", label: "Cyber" },
];

const EQUIPOS = [
  { value: "NOT", label: "Notebook" },
  { value: "PC", label: "PC Escritorio" },
  { value: "IMP", label: "Impresora Termica" },
  { value: "LEC", label: "Lector de codigo de Barras" },
  { value: "PDA", label: "PDA" },
  { value: "MON", label: "Monitor" }

];

const MARCAS = [
  { value: "LENOVO", label: "Lenovo" },
  { value: "HP", label: "HP" },
  { value: "ZEBRA", label: "Zebra" },
  { value: "UNITECH", label: "Unitech" },
  { value: "HONEYWELL", label: "Honeywell" },
  { value: "SAMSUNG", label: "Samsung" },
  { value: "DELL", label: "Dell" },
  { value: "ASUS", label: "Asus" },
  { value: "APPLE", label: "Apple" },
];

const MODELOS = {
  LENOVO: [
    { value: "THINKPADL14GEN6", label: "ThinkPad L14 Gen 6" },
    { value: "THINKPADS24E", label: "THINKPAD S24E" },
    { value: "THINKPADL14GEN5", label: "ThinkPad L14 Gen 5" },
    { value: "THINKCENTREM73", label: "ThinkCentre M73" },
  ],
  ZEBRA: [
    { value: "ZD220", label: "Zebra ZD220" },
    { value: "GC420T", label: "Zebra GC420T" },
    { value: "ZT411", label: "Zebra ZT411" },
    { value: "ZT411", label: "Zebra ZT400" },
    { value: "ZD230", label: "Zebra ZD230" },
    { value: "ZD421", label: "Zebra ZD421" },
    { value: "BARPOS9335", label: "Barpos 9335" },
    { value: "GK420T", label: "Zebra GK420T" },
    { value: "DS2278", label: "Zebra DS2278" },
  ],

  SAMSUNG: [
    { value: "F24T400FHL", label: "F24T400FHL" },
    { value: "S19C150F", label: "S19C150F" },
    { value: "S24A336NHL", label: "S24A336NHL" },
  ],
  DELL: [{ value: "DELL", label: "Dell" }],
  ASUS: [{ value: "VZ249", label: "VZ249" }],

  LG: [{ value: "20MK400H", label: "20MK400H" }],
  APPLE: [
    { value: "MACBOOK 13", label: "MacBook 13" },
    { value: "MACBOOK 14", label: "MacBook 14" },
    { value: "MACBOOK 16", label: "MacBook 16" },
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
    { value: "ZBOOKPOWER G11", label: "ZBOOK Power G11" },
    { value: "ZBOOKULTRA 14", label: "ZBOOK Ultra 14" },
    { value: "ZBOOKFIREFLY 14", label: "ZBOOK Firefly 14" },
    { value: "VOSTRO3480", label: "Vostro 3480" },
    { value: "VOSTRO3490", label: "Vostro 3490" },
    { value: "PRODESK400G3", label: "ProDesk 400 G3" },
    { value: "PRODESK400G6", label: "ProDesk 400 G6" },

    { value: "HPPRO3000SFF", label: "HP Pro 3000 SFF" },
    { value: "HPSSF600G9", label: "HP Pro SFF G9" },
    { value: "PAVILION15", label: "Pavilion 15" },

    { value: "CARGADORHP45", label: "Cargador 65W" },
    { value: "CARGADORHP65", label: "Cargador 45W" },
  ],
};

const GERENCIAS = [
  { value: "ADMINISTRACION Y FINANZAS", label: "Administración y finanzas" },
  { value: "INFORMATICA", label: "Informática" },
  { value: "PERSONAS", label: "Personas" },
  { value: "COMERCIAL", label: "Comercial" },
  { value: "LEGAL", label: "Legal" },
  { value: "MARKETING", label: "Marketing" },
  { value: "DISTRIBUCIÓN", label: "Distribución" },
  { value: "LOGISTICA", label: "Logística" },
  { value: "REGIONES", label: "Regiones" },
  { value: "PANOLTI", label: "Panol TI" },
];
const GENERICOS = [
  { value: "ADMINISTRACION Y FINANZAS", label: "Administración y finanzas" },
  { value: "INFORMATICA", label: "Informática" },
  { value: "ALMACEN 1", label: "Almacen 1" },
  { value: "ALMACEN 2", label: "Almacen 2" },
  { value: "COMERCIAL", label: "Comercial" },
  { value: "CONTROL INVENTARIO", label: "Control Inventario" },
  { value: "FERRETERIA/MANTENCION", label: "Ferreteria/Mantencion" },
  { value: "FULFILLMENT", label: "FulFillment" },
  { value: "GERENCIA GENERAL", label: "Gerencia General" },
  { value: "HUAWEI", label: "Huawei" },
  { value: "INDEMNIZACIONES", label: "Indemnizaciones" },
  { value: "INFRAESTRUCTURA", label: "Infraestructura" },
  { value: "LEGAL", label: "Legal" },
  { value: "MARKETING", label: "Marketing" },
  { value: "DISTRIBUCION", label: "Distribución" },
  { value: "MARKETING", label: "Marketing" },
  { value: "LOGISTICA", label: "Logistica" },
  { value: "NUEVOS NEGOCIOS", label: "Nuevos Negocios" },
  { value: "PREVENCION DE RIESGOS", label: "Prevención de Riesgos" },
  { value: "RECURSOS HUMANOS", label: "Recursos Humanos" },
  { value: "SEGURIDAD", label: "Seguridad" },
  { value: "REGION", label: "Region" },
  { value: "PANOLTI", label: "Panol TI" },
];
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
    ],
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
    ],
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
    ],
  },
  {
    grupo: "HUB",
    opciones: [{ value: "HUB", label: "HUB" }],
  },
];

function poblarSelect(id, datos, conGrupos) {
  const select = document.getElementById(id);
  select.innerHTML = '<option value="">Seleccionar</option>';
  if (conGrupos) {
    datos.forEach(function (grupo) {
      const optgroup = document.createElement("optgroup");
      optgroup.label = "── " + grupo.grupo + " ──";
      grupo.opciones.forEach(function (op) {
        const option = document.createElement("option");
        option.value = op.value;
        option.textContent = op.label;
        optgroup.appendChild(option);
      });
      select.appendChild(optgroup);
    });
  } else {
    datos.forEach(function (op) {
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
  poblarSelect("gerencia", GERENCIAS, false);
}
