import { $ } from "./get-element.utils.js";

export class useComponents {
  constructor() {
    if (useComponents.instance) {
      return useComponents.instance;
    }
    useComponents.instance = this;
    this.getComponents();
    return useComponents.instance;
  }

  async getData(url) {
    const response = await fetch(`${url}.html`);
    return await response.text();
  }

  async logDataInComponent(component) {
    const html = await this.getData(component.getAttribute("data-component"));

    // Crear contenedor temporal
    const temp = document.createElement("div");
    temp.innerHTML = html;

    // Extraer scripts antes de insertar
    const scripts = temp.querySelectorAll("script");
    scripts.forEach((s) => s.remove()); // Evitar que se clonen

    // Clonar el HTML sin los scripts
    const clone = temp.cloneNode(true);
    component.replaceWith(...clone.childNodes);

    // Ejecutar los scripts después de insertar el HTML
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");

      // Copiar atributos como type, module, etc.
      [...oldScript.attributes].forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });

      if (oldScript.src) {
        // Forzar recarga para scripts externos
        const url = new URL(oldScript.src, location.origin);
        url.searchParams.set("_", Date.now()); // previene caché
        newScript.src = url.toString();
      } else {
        newScript.textContent = oldScript.textContent;
      }

      document.body.appendChild(newScript);
    });
  }

  getComponents() {
    const components = $("[data-component]");
    components.forEach((component) => {
      this.logDataInComponent(component);
    });
  }
}
