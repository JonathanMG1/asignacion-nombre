function calcular() {
  const modo = document.getElementById("modo").value;
  const tipo = document.getElementById("tipo").value;
  const equipo = document.getElementById("equipo").value;
  const ciudad = document.getElementById("ciudad").value;
  const gerencia = document.getElementById("gerencia").value;
  const card = document.getElementById("result-card");

  const p1 = tipo ? tipo[0].toUpperCase() : "";
  const p2 = equipo ? equipo[0].toUpperCase() : "";
  const p3 = gerencia ? gerencia[0].toUpperCase() : "";
  const p4 = ciudad ? ciudad[0].toUpperCase() : "";

  let p5 = "",
    p6 = "",
    resto = "";
  let pills = [];

  if (modo === "GENERICO") {
    const generico = document.getElementById("generico").value;
    if (!generico || !tipo || !equipo || !ciudad || !gerencia) {
      card.classList.remove("visible");
      return;
    }
    p5 = (generico[0] || "").toUpperCase();
    p6 = (generico[1] || "").toUpperCase();
    resto = generico.slice(2).toUpperCase().slice(0, 7);

    pills = [
      { label: "Tipo", val: p1 },
      { label: "Equipo", val: p2 },
      { label: "Gerencia", val: p3 },
      { label: "Ciudad", val: p4 },
      { label: "Genérico", val: p5 + p6 + resto },
    ];
  } else {
    const nombre = document.getElementById("nombre").value.trim();
    if (!nombre || !tipo || !equipo || !ciudad || !gerencia) {
      card.classList.remove("visible");
      return;
    }
    const partes = nombre.split(/\s+/);
    p5 = (partes[0][0] || "").toUpperCase();
    p6 = partes.length > 1 ? (partes[0][1] || "").toUpperCase() : p5;
    resto = ultimaPalabra(nombre);

    pills = [
      { label: "Tipo", val: p1 },
      { label: "Equipo", val: p2 },
      { label: "Gerencia", val: p3 },
      { label: "Ciudad", val: p4 },
      { label: "Inicial 1", val: p5 },
      { label: "Inicial 2", val: p6 },
      { label: "Apellido", val: resto },
    ];
  }

  const code = (p1 + p2 + p3 + p4 + p5 + p6 + resto).slice(0, 15);

  card.classList.add("visible");
  document.getElementById("result-code").textContent = code;
  document.getElementById("pills").innerHTML = pills
    .map(function (p) {
      return '<div class="pill">' + p.label + ": <b>" + p.val + "</b></div>";
    })
    .join("");
}
function ultimaPalabra(nombre) {
  const p = nombre.trim().split(/\s+/);
  return (p[p.length - 1] || "").toUpperCase().slice(0, 9);
}
function calcularEquipo() {
  const nombre = document.getElementById("nombre").value.trim();
  const equipo = document.getElementById("equipo").value;
  const marca = document.getElementById("marca").value.trim();
  const modeloInput = document.getElementById("modelo");
  const modelo = (modeloInput.dataset.value || modeloInput.value).trim();
  const serie = document.getElementById("serie").value.trim();
  const card = document.getElementById("result-card-equipo");

  if (!nombre || !equipo || !marca || !modelo || !serie) {
    card.classList.remove("visible");
    return;
  }

  const equipoAbrev = equipo.slice(0, 3).toUpperCase();
  const partes = nombre.trim().split(/\s+/);
  const primerNombre = (partes[0] || "").toUpperCase();
  const apellido = (partes[partes.length - 1] || "").toUpperCase();

  const code =
    "ASIG_" +
    equipoAbrev +
    "_" +
    marca.toUpperCase().replace(/\s+/g, "") +
    "_" +
    modelo.toUpperCase().replace(/\s+/g, "") +
    "_" +
    serie.toUpperCase().replace(/\s+/g, "") +
    "_" +
    primerNombre +
    apellido;

  card.classList.add("visible");
  document.getElementById("result-code-equipo").textContent = code;
  document.getElementById("pills-equipo").innerHTML = [
    { label: "Equipo", val: equipoAbrev },
    { label: "Marca", val: marca.toUpperCase() },
    { label: "Modelo", val: modelo.toUpperCase() },
    { label: "Serie", val: serie.toUpperCase() },
    { label: "Nombre", val: primerNombre + apellido },
  ]
    .map(function (p) {
      return '<div class="pill">' + p.label + ": <b>" + p.val + "</b></div>";
    })
    .join("");
}

function copiarEquipo() {
  const code = document.getElementById("result-code-equipo").textContent;
  navigator.clipboard.writeText(code).then(function () {
    const btn = document.getElementById("copy-btn-equipo");
    btn.textContent = "¡Copiado!";
    btn.classList.add("done");
    setTimeout(function () {
      btn.textContent = "Copiar nombre";
      btn.classList.remove("done");
    }, 2000);
  });
}

function copiar() {
  const code = document.getElementById("result-code").textContent;
  navigator.clipboard.writeText(code).then(function () {
    const btn = document.getElementById("copy-btn");
    btn.textContent = "¡Copiado!";
    btn.classList.add("done");
    setTimeout(function () {
      btn.textContent = "Copiar nombre";
      btn.classList.remove("done");
    }, 2000);
  });
}
function onMarcaChange() {
  const marca = document.getElementById("marca").value;
  const selectModelo = document.getElementById("modelo");

  selectModelo.innerHTML = '<option value="">Seleccionar</option>';

  if (marca && MODELOS[marca]) {
    MODELOS[marca].forEach(function (m) {
      const op = document.createElement("option");
      op.value = m.value;
      op.textContent = m.label;
      selectModelo.appendChild(op);
    });
  }

  calcularEquipo();
}
let acModeloIndex = -1;
let acModeloBlurTimer = null;

function onModeloInput() {
  const marca = document.getElementById("marca").value;
  const val = document.getElementById("modelo").value.trim().toUpperCase();
  acModeloIndex = -1;
  if (!val || val.length < 2) {
    cerrarAcModelo();
    calcularEquipo();
    return;
  }

  const lista = MODELOS[marca] || [];
  const matches = lista
    .filter(function (item) {
      return item.label.toUpperCase().includes(val) || item.value.includes(val);
    })
    .slice(0, 10);

  renderAcModelo(matches, val);
}

function renderAcModelo(matches, query) {
  const list = document.getElementById("ac-modelo-list");
  if (!matches.length) {
    cerrarAcModelo();
    return;
  }
  list.innerHTML = matches
    .map(function (item) {
      const highlighted = item.label
        .toUpperCase()
        .replace(query, '<span class="ac-match">' + query + "</span>");
      return (
        '<div class="autocomplete-item" data-value="' +
        item.value +
        '" onmousedown="seleccionarModelo(\'' +
        item.value +
        "', '" +
        item.label +
        "')\">" +
        '<span class="ac-ceco">' +
        highlighted +
        "</span>" +
        "</div>"
      );
    })
    .join("");
  list.className = "autocomplete-list open";
}

function cerrarAcModelo() {
  const list = document.getElementById("ac-modelo-list");
  list.className = "autocomplete-list";
  list.innerHTML = "";
  acModeloIndex = -1;
}

function seleccionarModelo(value, label) {
  document.getElementById("modelo").value = label;
  document.getElementById("modelo").dataset.value = value;
  cerrarAcModelo();
  calcularEquipo();
}

function onModeloKey(e) {
  const list = document.getElementById("ac-modelo-list");
  const items = list.querySelectorAll(".autocomplete-item");
  if (!items.length) return;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    acModeloIndex = Math.min(acModeloIndex + 1, items.length - 1);
    items.forEach(function (el, i) {
      el.classList.toggle("active", i === acModeloIndex);
    });
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    acModeloIndex = Math.max(acModeloIndex - 1, 0);
    items.forEach(function (el, i) {
      el.classList.toggle("active", i === acModeloIndex);
    });
  } else if (e.key === "Enter" && acModeloIndex >= 0) {
    e.preventDefault();
    const item = items[acModeloIndex];
    seleccionarModelo(
      item.dataset.value,
      item.querySelector(".ac-ceco").textContent,
    );
  } else if (e.key === "Escape") {
    cerrarAcModelo();
  }
}

function onModeloBlur() {
  acModeloBlurTimer = setTimeout(function () {
    cerrarAcModelo();
  }, 200);
}
function onModoChange() {
  const modo = document.getElementById("modo").value;
  const campoNombre = document.getElementById("campo-nombre");
  const campoGenerico = document.getElementById("campo-generico");

  if (modo === "GENERICO") {
    campoNombre.style.display = "none";
    campoGenerico.style.display = "block";
    document.getElementById("nombre").value = "";

    const sel = document.getElementById("generico");
    if (sel.options.length <= 1) {
      GENERICOS.forEach(function (g) {
        const op = document.createElement("option");
        op.value = g.value;
        op.textContent = g.label;
        sel.appendChild(op);
      });
    }
  } else {
    campoNombre.style.display = "block";
    campoGenerico.style.display = "none";
    document.getElementById("generico").value = "";
  }
  calcular();
}
