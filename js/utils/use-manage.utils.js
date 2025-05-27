import { $ } from "./get-element.utils.js";

export class useManageComponent {
  constructor({ className, element, inner, attributes }) {
    this.className = className;
    this.element = element;
    this.inner = inner;

    this.component = document.createElement(this.element);

    if (className) {
      if (Array.isArray(className)) {
        className.forEach((cls) => this.component.classList.add(cls));
      } else {
        this.component.classList.add(className);
      }
    }

    if (attributes) {
      Object.keys(attributes).forEach((key) => {
        this.component.setAttribute(key, attributes[key]);
      });
    }
    this.addInner(this.inner);
  }

  insertIn(selector, position = "outer") {
    if (!this.component) return;
    if (position === "outer") {
      $(selector).outerHTML = this.component.outerHTML;
      return;
    }
    $(selector).insertAdjacentElement(position, this.component);
  }

  addInner(inner) {
    if (!inner) return;
    this.component.innerHTML = "";
    if (typeof inner === "string") {
      this.component.innerHTML = inner;
    } else if (
      inner instanceof HTMLElement ||
      inner instanceof useManageComponent
    ) {
      this.component.appendChild(inner);
    } else {
      inner.forEach((node) => {
        this.component.appendChild(node);
      });
    }
  }
}
