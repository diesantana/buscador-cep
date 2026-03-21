// =================================================================
// Manipulação da interface e do DOM
// =================================================================

// Elemento de erro
const errorElement = document.querySelector("#error-message");

/**
 * Renderiza uma mensagem de erro na interface.
 * @param {string} message A mensagem de erro a ser renderizada.
 */
export function renderErrorMessage(message) {
  errorElement.innerHTML = message;
}

/**
 * Limpa a mensagem de erro da interface.
 */
export function clearErrorMessage() {
  errorElement.innerHTML = "";
}