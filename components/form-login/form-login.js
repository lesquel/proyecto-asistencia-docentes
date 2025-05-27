import { generateInput, useRoutes } from "./../../js/utils/index.js";
import { patternList } from "./../../js/types/index.js";
import { $ } from "./../../js/utils/index.js";
import { Data } from "./../../js/data.data.js";
import {siteRoutes} from "./../../js/routes/site.routes.js";

const data = new Data();
const routes = new useRoutes();

const email = generateInput(
  {
    className: "input-field",
    attributes: {
      type: "email",
      placeholder: "Correo",
    },
    expression: patternList.email,
    labelText: "Correo",
    insertIn: "#form-login",
  },
  { labelText: "" }
);

const password = generateInput(
  {
    className: "input-field",
    attributes: {
      type: "password",
      placeholder: "Contraseña",
    },
    expression: patternList.numberAndLetters,
    labelText: "Contraseña",
    insertIn: "#form-login",
  },
  {
    labelText: "",
  }
);

const listInputs = [email, password];
$("#form-login").addEventListener("submit", (e) => {
  e.preventDefault();

  listInputs.forEach((element) => {
    element.showError();
  });

  const login = data.login({
    email: email.getValue(),
    password: password.getValue(),
  });

  if (login) {
    routes.redirect(siteRoutes[0].path);
  }
});
