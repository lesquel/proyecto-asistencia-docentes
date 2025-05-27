import { $ } from "./../../js/utils/index.js";
import { Data } from "./../../js/data.data.js";
import { Docente } from "../../js/models/docente.model.js";

const data = new Data();
const user = new Docente(data.getUser());

// $("#docente-id").innerHTML = user.id;
$("#docente-name").innerHTML = user.nombre + " " + user.apellido;
$("#docente-more").innerHTML = user.email // + " - " + user.telefono  + " - " + user.direccion;