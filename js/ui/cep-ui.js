// =================================================================
// Manipulação da interface e do DOM
// =================================================================

// Elementos
const errorElement = document.querySelector("#error-message");
const resultCEP = document.querySelector("#cep-data");
const searchButton = document.querySelector('#cep-form button');

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
    <p><strong>CEP: </strong> ${data.cep}</p>
    <p><strong>Rua: </strong>${data.logradouro}</p>
    <p><strong>Bairro: </strong>${data.bairro}</p>
    <p><strong>Cidade: </strong>${data.localidade}</p>
    <p><strong>Estado: </strong>${data.uf}</p>
  `;

  resultCEP.hidden = false;
}

/**
 * Limpa os dados do endereço da interface.
 */
export function clearAddress() {
  resultCEP.innerHTML = '';
  resultCEP.hidden = true;
}

/**
 * Exibe "loading" no botão de busca na interface.
 */
export function showLoading() {
  searchButton.disabled = true;
  searchButton.innerHTML = 'Buscando...';
}

/**
 * Esconde "loading" no botão de busca na interface 
 * e exibe "Buscar".
 */
export function hideLoading() {
  searchButton.disabled = false;
  searchButton.innerHTML = 'Buscar';
}