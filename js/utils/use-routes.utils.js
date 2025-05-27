import { $ } from "./get-element.utils.js";
import { useComponents } from "./use-components.utls.js";

const useComponentsInstance = new useComponents();

export class useRoutes {
  #routes = [];
  #app = $("#app");

  constructor(routes) {
    if (useRoutes.instance) return useRoutes.instance;

    this.#routes = routes;
    this.#eventListenerClick();
    this.#route(); // Mostrar la ruta actual al cargar
    useRoutes.instance = this;
  }

  #eventListenerClick() {
    document.body.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]")) {
        e.preventDefault();
        const url = e.target.getAttribute("href");
        this.#navigate(url);
      }
    });

    window.addEventListener("hashchange", () => this.#route());
  }

  #navigate(url) {
    location.hash = url.startsWith("#") ? url : `#${url}`;
  }

  async #route() {
    const hash = location.hash.slice(1) || "/";
    const route = this.#routes.find((r) => r.path === hash);

    if (route) {
      const html = await this.#loadPage(route.page);
      this.#app.innerHTML = html;
      this.#executeScripts(this.#app);
      useComponentsInstance.getComponents();
    } else {
      this.#app.innerHTML = `<h1>404 - Página no encontrada</h1>`;
    }
  }

  async #loadPage(page) {
    const response = await fetch(page);
    return await response.text();
  }

  #executeScripts(container) {
    const scripts = container.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");

      // Copiar atributos
      [...oldScript.attributes].forEach((attr) =>
        newScript.setAttribute(attr.name, attr.value)
      );

      if (oldScript.src) {
        // Forzar recarga del script externo agregando un query param único
        const url = new URL(oldScript.src, location.origin);
        url.searchParams.set("_", Date.now()); // previene caché
        newScript.src = url.toString();
      } else {
        newScript.textContent = oldScript.textContent;
      }

      oldScript.replaceWith(newScript);
    });
  }

  addRoutes(path, page) {
    this.#routes.push({ path, page });
  }

  getRoutes() {
    return [...this.#routes];
  }

  getPage(path) {
    const route = this.#routes.find((r) => r.path === path);
    return route?.page;
  }

  redirect(path) {
    this.#navigate(path);
  }
}
