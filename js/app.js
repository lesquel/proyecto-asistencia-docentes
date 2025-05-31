import { useComponents, useRoutes } from './utils/index.js';
import { authRoutes, siteRoutes } from './routes/index.js';

const useComponentsInstance = new useComponents();

const routes = new useRoutes([...siteRoutes, ...authRoutes]);

document.addEventListener("DOMContentLoaded", () => {
});
