// =================================================================
// Comunicação com a API
// =================================================================

/**
 * Faz uma requisição para a API do ViaCEP
 * para buscar os dados de um CEP.
 * @param {string} cep O CEP a ser buscado.
 * @returns {Promise<object>} Os dados do CEP em formato JSON.
 */
export async function fetchCep(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    return data;
}
