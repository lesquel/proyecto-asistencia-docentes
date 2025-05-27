import { Data } from "../../js/data.data.js";
import { $ } from "./../../js/utils/index.js";
import { templateAsistencia } from "./asistencia.js";
const data = new Data();
const user = data.getUser();

export const generateAsitencia = () => {
  const asistencias = data.findAsistencias(user); // aquí estaba mal el nombre: findasistencias
  asistencias.forEach((asistencia) => {
    const lugar = data.findLugarById(asistencia.idLugar);
    const card = templateAsistencia({
      id: asistencia.id,
      lugar: lugar.nombre + " (" + lugar.direccion + ")",
      fecha: asistencia.fecha,
      salida: {
        tipoSalida: asistencia.salida.tipoSalida,
        horaSalida: asistencia.salida.horaSalida,
      },
      entrada: {
        tipoEntrada: asistencia.entrada.tipoEntrada,
        horaEntrada: asistencia.entrada.horaEntrada,
      },
    });
    $("#asistencia_conte").appendChild(card);
  });
};

export const removeAsitencia = () => {
  $("#asistencia_conte").innerHTML = "";
};
