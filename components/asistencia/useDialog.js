export const useDialog = ({
  id,
  lugar,
  fecha,
  salida,
  entrada,
  justificacion,
}) => {
  document.querySelector("#dialog-title").textContent = lugar;
  document.querySelector("#dialog-docente").textContent = lugar;
  document.querySelector("#dialog-fecha").textContent = fecha;
  const textEntrada = entrada.horaEntrada ? entrada.horaEntrada : "";
  const textTipoEntrada = entrada.tipoEntrada ? entrada.tipoEntrada : "";
  document.querySelector("#dialog-entrada").textContent =
    textTipoEntrada + ", " + textEntrada;
  const textSalida = salida.horaSalida ? salida.horaSalida : "";
  const textTipoSalida = salida.tipoSalida ? salida.tipoSalida : "";
  document.querySelector("#dialog-salida").textContent =
    textTipoSalida + ", " + textSalida;
  document.querySelector("#dialog-justificacion").textContent = justificacion;
};
