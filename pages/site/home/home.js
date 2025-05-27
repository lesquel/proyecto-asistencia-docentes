import { useRoutes } from "../../../js/utils/index.js";
import { authRoutes } from "../../../js/routes/auth.routes.js";
import { Data } from "../../../js/data.data.js";
  const data = new Data();
const routes = new useRoutes([...authRoutes]);
if (!data.getUser()) {
  routes.redirect(authRoutes[0].path);
}

