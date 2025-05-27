export function $(selector) {
    if (selector.startsWith("#")) {
        return document.querySelector(selector);
    }
    return document.querySelectorAll(selector);
}