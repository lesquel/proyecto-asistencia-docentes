export class Asistencia {
  constructor({ id, idDocente, idLugar, entrada, salida, fecha }) {
    this.id = id;
    this.idDocente = idDocente;
    this.idLugar = idLugar;
    this.fecha = fecha;

    this.entrada = {
      tipoEntrada: entrada?.tipoEntrada,
      horaEntrada: entrada?.horaEntrada,
    };

    this.salida = {
      tipoSalida: salida?.tipoSalida,
      horaSalida: salida?.horaSalida,
    };
  }
}
