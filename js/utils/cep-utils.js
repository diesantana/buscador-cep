// =================================================================
// Funções auxiliares para limpeza e validação do CEP
// =================================================================

/**
 * Remove todos os caracteres que não são números do CEP.
 * @param {string} cep O CEP a ser limpo.
 * @returns {string} O CEP limpo.
 */
export function clearZipCode(cep) {
    return cep.replace(/\D/g, '');
    // /\D/g remove tudo que não for número
}