export const templateHorarios = (horario) => {
  const template = document.getElementById("horarios-template");
  const clone = template.content.cloneNode(true);
  clone.querySelector(".task-title").textContent = horario.fecha;
  clone.querySelector(".task-time").textContent = horario.salida + " - " + horario.entrada;
  clone.querySelector(".task-time").setAttribute("datetime", horario.salida);

  return clone;
};
