import { Data } from "../../js/data.data.js";
import { $ } from "./../../js/utils/index.js";
import { templateHorarios } from "./horarios.js";
const data = new Data();
export const generateHorarios = () => {
  const horarios = data.data.horarios;
  horarios.forEach((horario, index) => {
    const card = templateHorarios(horario);
    $("#horarios_conte").appendChild(card);
  });
};

export const removeHorarios = () => {
  $("#horarios_conte").innerHTML = "";
};
