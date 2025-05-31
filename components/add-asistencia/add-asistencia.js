import { Data } from "../../js/data.data.js";
import {
  $,
  obtenerRadomTipoEntrada,
  obtenerRadomTipoSalida,
  obtenerHoraActual,
  obtenerDiaMesAnoActual,
} from "./../../js/utils/index.js";
import {
  generateAsitencia,
  removeAsitencia,
} from "../asistencia/useAsistencia.utils.js";
import {
  generateHorarios,
  removeHorarios,
} from "../horarios/useHorarios.utils.js";


const data = new Data();

$("#add-btn-txt").addEventListener("click", () => {
  const asistencia = data.obtenerLaprimeraAsistencia();

  if (
    asistencia &&
    asistencia.entrada &&
    asistencia.salida.tipoSalida === undefined
  ) {
    data.cambiarLaSalida(asistencia.id, {
      tipoSalida: obtenerRadomTipoSalida(),
      horaSalida: obtenerHoraActual(),
    });
  } else {
    if (data.data.horarios.length === 0) {
      alert("No hay horarios disponibles");
      return;
    }
    data.addAsistencia({
      idDocente: data.getUser().id,
      idLugar: 0,
      entrada: {
        tipoEntrada: obtenerRadomTipoEntrada(),
        horaEntrada: obtenerHoraActual(),
      },
      fecha: obtenerDiaMesAnoActual(),
    });
    data.removeHorario(0);
  }

  removeAsitencia();
  generateAsitencia();
  removeHorarios();
  generateHorarios();
});
