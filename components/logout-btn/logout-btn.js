import { $ } from "./../../js/utils/index.js";
import { Data } from "./../../js/data.data.js";
import { authRoutes } from "../../js/routes/auth.routes.js";
import { siteRoutes } from "../../js/routes/site.routes.js";
import { useRoutes } from "../../js/utils/index.js";

const routes = new useRoutes();
const data = new Data();
const logout = $("#logout");
if (data.getUser()) {
  logout.textContent = "Logout";
  logout.addEventListener("click", () => {
    data.logout();
    routes.redirect(authRoutes[0].path);
  });
} else {
  logout.textContent = "Login";
  logout.addEventListener("click", () => {
    routes.redirect(authRoutes[0].path);
  });
}
