import { Data } from "../../js/data.data.js";
import { $ } from "../../js/utils/get-element.utils.js";
import { useDialog } from "./useDialog.js";

export const templateAsistencia = ({
  id,
  lugar,
  fecha,
  salida,
  entrada,
  justificacion,
}) => {
  const template = $(".workout-template")[0];
  console.log(template);
  const clone = template.content.cloneNode(true);

  clone.querySelector(".workout-card").addEventListener("click", () => {
    useDialog({
      id,
      lugar,
      fecha,
      salida,
      entrada,
      justificacion,
    });
    dialog_asistencia.show();
  });

  clone.querySelector(".workout-title").textContent = lugar;
  clone.querySelector(".workout-time").textContent = fecha;
  const list = clone.querySelector(".workout-list");

  // Crear div para entrada
  const entradaDiv = document.createElement("div");
  entradaDiv.className = "workout-item"; // mejor clase para contener punto + texto

  const entradaDot = document.createElement("div");
  entradaDot.className = "workout-dot";

  const entradaText = document.createElement("div");
  entradaText.className = "workout-text";
  const textoEntrada = entrada.horaEntrada ? entrada.horaEntrada : "";
  const textoTipoEntrada = entrada.tipoEntrada ? entrada.tipoEntrada : "";
  entradaText.textContent = textoTipoEntrada + ", " + textoEntrada; //(entrada.horaEntrada) ? entrada.horaEntrada : "";

  entradaDiv.appendChild(entradaDot);
  entradaDiv.appendChild(entradaText);

  // Crear div para salida
  const salidaDiv = document.createElement("div");
  salidaDiv.className = "workout-item";

  const salidaDot = document.createElement("div");
  salidaDot.className = "workout-dot";

  const salidaText = document.createElement("div");
  salidaText.className = "workout-text";
  const textoSalida = salida.horaSalida ? salida.horaSalida : "";
  const textoTipoSalida = salida.tipoSalida ? salida.tipoSalida : "";
  salidaText.textContent = textoTipoSalida + ", " + textoSalida; //(salida.horaSalida) ? salida.horaSalida : "";

  salidaDiv.appendChild(salidaDot);
  salidaDiv.appendChild(salidaText);

  // Añadir los elementos a la lista
  list.appendChild(entradaDiv);
  list.appendChild(salidaDiv);

  // Devuelves el nodo principal que quieres insertar
  return clone.firstElementChild;
};
