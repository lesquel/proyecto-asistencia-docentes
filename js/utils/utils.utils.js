import { TipoEntrada, TipoSalida } from "../types/tipo-asistencia.type.js";
export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const obtenerMinutosActuales = () => {
  const fechaActual = new Date();
  const minutosActuales = fechaActual.getMinutes();
  return minutosActuales;
};

export const obtenerHoraActual = () => {
  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();
  return horaActual + ":" + obtenerMinutosActuales();
};

export const obtenerDiaMesAnoActual = () => {
  const fechaActual = new Date();
  const diaMesAnoActual = fechaActual.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return diaMesAnoActual;
};

export const obtenerRadomTipoEntrada = () => {
  const tipoEntrada = getRandomInt(0, 1);
  if (tipoEntrada === 0) {
    return TipoEntrada.entrada;
  }
  return TipoEntrada.entradaAtrasada;
};

export const obtenerRadomTipoSalida = () => {
  const tipoSalida = getRandomInt(0, 1);
  if (tipoSalida === 0) {
    return TipoSalida.salida;
  }
  return TipoSalida.salidaAtrasada;
};