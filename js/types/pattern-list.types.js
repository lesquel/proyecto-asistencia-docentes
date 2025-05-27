export const patternList = {
  // Correos válidos con dominios y subdominios estándar
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

  // Cadenas de texto con letras (incluye acentos) y espacios, sin números ni símbolos
  string: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,50}$/,

  // Solo números (entero positivo)
  number: /^\d+$/,

  // Teléfono: 10 dígitos (puedes ajustar para códigos de país si necesitas)
  phone: /^\d{10}$/,

  // Cédula o ID: 10 dígitos exactos (ajustable a tu país)
  id: /^\d{10}$/,

  // Fecha: formato YYYY-MM-DD con validación simple
  date: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,

  numberAndLetters: /^[A-Za-z0-9]+$/,
};



