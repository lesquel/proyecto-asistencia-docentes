import { Data } from "../../js/data.data.js";
import { $ } from "../../js/utils/get-element.utils.js";

export const templateAsistencia = ({ id, lugar, fecha, salida, entrada }) => {
  const template = $(".workout-template")[0];
  console.log(template);
  const clone = template.content.cloneNode(true);

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
  entradaText.textContent = entrada.tipoEntrada + ", " + textoEntrada; //(entrada.horaEntrada) ? entrada.horaEntrada : "";

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
  salidaText.textContent = salida.tipoSalida + ", " + textoSalida; //(salida.horaSalida) ? salida.horaSalida : "";

  salidaDiv.appendChild(salidaDot);
  salidaDiv.appendChild(salidaText);

  // Añadir los elementos a la lista
  list.appendChild(entradaDiv);
  list.appendChild(salidaDiv);

  // Devuelves el nodo principal que quieres insertar
  return clone.firstElementChild;
};
