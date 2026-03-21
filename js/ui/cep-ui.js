// =================================================================
// Manipulação da interface e do DOM
// =================================================================

// Elementos
const errorElement = document.querySelector("#error-message");
const resultCEP = document.querySelector("#cep-data");

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

/**
 * Renderiza os dados do CEP na interface.
 * @param {object} data Os dados do CEP.
 */
export function renderAddress(data) {
  resultCEP.innerHTML = `
    <p>CEP: ${data.cep}</p>
    <p>Rua: ${data.logradouro}</p>
    <p>Bairro: ${data.bairro}</p>
    <p>Cidade: ${data.localidade}</p>
    <p>Estado: ${data.uf}</p>
  `;
}