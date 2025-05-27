import { useRoutes } from "../../../js/utils/index.js";
import { siteRoutes } from "../../../js/routes/site.routes.js";
import { Data } from "../../../js/data.data.js";


const data = new Data();
const routes = new useRoutes([...siteRoutes]);

if (data.getUser()) {
    routes.redirect(siteRoutes[0].path);
}