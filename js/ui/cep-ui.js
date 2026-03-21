// =================================================================
// Manipulação da interface e do DOM
// =================================================================

/**
 * Renderiza uma mensagem de erro na interface.
 * @param {string} message A mensagem de erro a ser renderizada.
 */
export function renderErrorMessage(message) {
  const errorElement = document.querySelector("#error-message");
  errorElement.innerHTML = message;
}
