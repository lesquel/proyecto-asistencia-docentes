import { useManageComponent } from "./use-manage.utils.js";

export class useManageComponentInput extends useManageComponent {
  constructor({ className, attributes, expression, value }) {
    // Crea un contenedor en lugar de que `component` sea solo el input
    super({
      className,
      element: "div", // El input estará dentro de este div
      inner: "",
    });

    this.inputElement = document.createElement("input");
    this.inputElement.className = Array.isArray(className)
      ? className.join(" ")
      : className;
    this.expression = expression;
    this.inputElement.value = value || "";

    // Setea atributos
    if (attributes) {
      Object.keys(attributes).forEach((key) => {
        this.inputElement.setAttribute(key, attributes[key]);
      });
    }

    // Etiqueta de error
    this.error = document.createElement("p");
    this.error.classList.add("error");

    // Añade input y error al contenedor
    this.component.appendChild(this.inputElement);
    this.component.appendChild(this.error);

    // Listener para validaciones en vivo
    this.inputElement.addEventListener("input", () => this.showError());
  }

  showError() {
    const value = this.inputElement.value;
    const validation = this.validations(value);
    if (validation) {
      this.error.textContent = validation;
    } else {
      this.error.textContent = "";
    }
  }

  validations(value) {
    if (!value || value.trim() === "") {
      return "Campo obligatorio";
    } else if (this.expression && !this.expression.test(value)) {
      return "Formato incorrecto";
    }
    return null;
  }

  getValue() {
    return this.inputElement.value;
  }
}