import { Data } from "../../../js/data.data.js";
import { siteRoutes } from "../../../js/routes/site.routes.js";
import { authRoutes } from "../../../js/routes/auth.routes.js";
import { patternList } from "../../../js/types/pattern-list.types.js";
import {
  TipoEntrada,
  TipoSalida,
} from "../../../js/types/tipo-asistencia.type.js";
import { TipoJustificacion } from "../../../js/types/tipo-justificacion.type.js";
import { $, generateInput, useRoutes } from "../../../js/utils/index.js";
const data = new Data();
const routes = new useRoutes();

const select = $("#select-horario");
const horarios = data.obtenerHorarios();

if (!data.getUser()) {
  routes.redirect(authRoutes[0].path);
}

horarios.forEach((horario) => {
  const option = document.createElement("option");
  option.value = horario.fecha;
  option.textContent = horario.fecha;
  select.appendChild(option);
});

const selectTipoJustificacion = $("#select-tipo-justificacion");

TipoJustificacion.forEach((justificacion) => {
  const option = document.createElement("option");
  option.value = justificacion;
  option.textContent = justificacion;
  selectTipoJustificacion.appendChild(option);
});

const motivo = generateInput(
  {
    className: "input-field",
    attributes: {
      type: "text",
      placeholder: "Escribe el motivo",
    },
    expression: patternList.numberAndLetters,
    labelText: "Motivo de la justificación",
    insertIn: "#motivo-justificacion",
  },
  { labelText: "Motivo de la justificación" }
);

$("#form-justificacion").addEventListener("submit", (e) => {
  e.preventDefault();

  motivo.showError();
  if (motivo.getValue().trim() === "") {
    motivo.showError();
    return;
  }
  const horario = select.value;
  const tipoJustificacion = selectTipoJustificacion.value;
  const motivoValue = motivo.getValue();

  const h = data.obtenerHorarioPorFecha(horario);
  data.removeHorario(h.id);

  data.addAsistencia({
    idDocente: data.getUser().id,
    idLugar: 0,
    entrada: {
      tipoEntrada: TipoEntrada.justificacion,
      horaEntrada: undefined,
    },
    fecha: horario,
    salida: {
      tipoSalida: TipoSalida.justificacion,
      horaSalida: undefined,
    },
    justificacion: motivoValue,
  });
  routes.redirect(siteRoutes[0].path);

  console.log({ horario, tipoJustificacion, motivoValue });
});
