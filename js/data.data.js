import Horarios from "./models/horarios.model.js";
import { Docente, Lugar, Asistencia } from "./models/index.js";
import { TipoEntrada, TipoSalida } from "./types/tipo-asistencia.type.js";

export class Data {
  constructor() {
    if (Data.instance) {
      return Data.instance;
    }
    Data.instance = this;
    this.user = null;
    this.data = {};
    this.loadData();
    return this;
  }

  // Cargar datos desde localStorage o valores por defecto
  loadData() {
    if (localStorage.getItem("data")) {
      this.data = JSON.parse(localStorage.getItem("data"));
      return;
    }

    this.data = {
      horarios: [
        new Horarios({
          fecha: "2022-01-01",
          entrada: "10:00",
          salida: "16:00",
        }),
        new Horarios({
          fecha: "2022-01-02",
          entrada: "10:00",
          salida: "16:00",
        }),
        new Horarios({
          fecha: "2022-01-03",
          entrada: "10:00",
          salida: "16:00",
        }),
        new Horarios({
          fecha: "2022-01-04",
          entrada: "10:00",
          salida: "16:00",
        }),
      ],
      docentes: [
        new Docente({
          id: 0,
          nombre: "Juan",
          apellido: "Perez",
          email: "juanperez@gmail.com",
          telefono: "123456789",
          direccion: "Av. Juan Perez, 123",
          password: "123456",
        }),
      ],
      asistencias: [
        new Asistencia({
          id: 0,
          idDocente: 0,
          idLugar: 0,
          entrada: {
            tipoEntrada: TipoEntrada.entrada,
            horaEntrada: "10:00",
          },
          salida: {
            tipoSalida: TipoSalida.salida,
            horaSalida: "10:00",
          },
          fecha: "2022-01-01",
        }),
      ],
      lugares: [
        new Lugar({
          id: 0,
          nombre: "Facultad 1",
          direccion: "A lado de la facultad 2",
        }),
        new Lugar({
          id: 1,
          nombre: "Facultad 2",
          direccion: "A lado de la facultad 1",
        }),
      ],
    };
    this.saveData(); // Guarda la data inicial si no existía
  }

  // Guardar los datos en localStorage
  saveData() {
    localStorage.setItem("data", JSON.stringify(this.data));
  }

  // Autenticación
  #findDocenteByEmailAndPassword(email, password) {
    return this.data.docentes.find(
      (docente) => docente.email === email && docente.password === password
    );
  }

  login({ email, password }) {
    const user = this.#findDocenteByEmailAndPassword(email, password);
    if (user) {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    }
    return false;
  }

  getUser() {
    if (!this.user) {
      this.user = JSON.parse(localStorage.getItem("user"));
    }
    return this.user;
  }

  logout() {
    localStorage.removeItem("user");
    this.user = null;
  }

  // Consultas
  findAsistencias(docente) {
    return this.obtenerAsistencias().filter(
      (asistencia) => asistencia.idDocente === docente.id
    );
  }

  findLugarById(id) {
    return this.data.lugares.find((lugar) => lugar.id === id);
  }

  // Métodos para agregar datos
  addAsistencia(asistenciaData) {
    asistenciaData.id = this.data.asistencias.length;
    const asistencia = new Asistencia(asistenciaData);
    this.data.asistencias.push(asistencia);
    this.saveData();
  }

  addDocente(docenteData) {
    const docente = new Docente({
      id: this.data.docentes.length,
      ...docenteData,
    });
    this.data.docentes.push(docente);
    this.saveData();
  }

  addLugar(lugarData) {
    const lugar = new Lugar({
      id: this.data.lugares.length,
      ...lugarData,
    });
    this.data.lugares.push(lugar);
    this.saveData();
  }

  // (Opcional) eliminar un docente por id
  removeDocente(id) {
    this.data.docentes = this.data.docentes.filter((d) => d.id !== id);
    this.saveData();
  }

  // (Opcional) eliminar un lugar por id
  removeLugar(id) {
    this.data.lugares = this.data.lugares.filter((l) => l.id !== id);
    this.saveData();
  }

  // (Opcional) eliminar una asistencia por índice o condición
  removeAsistencia(index) {
    this.data.asistencias.splice(index, 1);
    this.saveData();
  }

  removeHorario(index) {
    this.data.horarios.splice(index, 1);
    this.saveData();
  }

  obtenerAsistencias() {
    return [...this.data.asistencias].reverse();
  }
  
  obtenerLaprimeraAsistencia() {
    return this.obtenerAsistencias()[0];
  }

  cambiarLaSalida(idAsistencia, salida) {
    const asistencia = this.data.asistencias.find((a) => a.id === idAsistencia);
    asistencia.salida = salida;
    this.saveData();
  }

  obtenerHorarios() {
    return this.data.horarios;
  }

  obtenerHorarioPorFecha(fecha) {
    return this.data.horarios.find((horario) => horario.fecha === fecha);
  }
}
