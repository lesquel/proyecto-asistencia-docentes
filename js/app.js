import { useComponents, useRoutes } from './utils/index.js';
import { authRoutes, siteRoutes } from './routes/index.js';
import { Data } from './data.data.js';

const useComponentsInstance = new useComponents();

console.log(location.hash.slice(1) || "/");

const routes = new useRoutes([...siteRoutes, ...authRoutes]);

document.addEventListener("DOMContentLoaded", () => {
});
