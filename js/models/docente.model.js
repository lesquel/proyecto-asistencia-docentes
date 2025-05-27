export class Docente {
  constructor({
    id,
    nombre,
    apellido,
    email,
    telefono,
    direccion,
    password
  }) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.telefono = telefono;
    this.direccion = direccion;
    this.password = password;
  }
}
