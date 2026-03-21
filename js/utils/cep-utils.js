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

/**
 * Verifica se o CEP possui 8 caracteres.
 * @param {string} cep O CEP a ser verificado.
 * @returns {boolean} Verdadeiro se o CEP tiver 8 caracteres, falso caso contrário.
 */
export function isValidZipCode(cep) {
    return cep.length === 8;
}

/**
 * Aplica uma máscara de CEP para o valor informado.
 * Se o valor tiver menos de 5 caracteres, retorna o valor sem hífen.
 * Se o valor tiver mais de 5 caracteres, coloca um hífen entre o 5º e o 6º caractere e retorna o valor.
 * @param {string|number} valor O valor a ter a máscara de CEP aplicada.
 * @returns {string} O valor com a máscara de CEP aplicada.
 */
export function applyCEPMask(valor) {
  const cleanZipCode = String(valor).replace(/\D/g, '').slice(0, 8);

  // Verifica se o CEP possui 5 (para inserir o hífen)
  if (cleanZipCode.length <= 5) {
    return cleanZipCode; // Não tem 5 caractecores, retorna sem hífen
  }

  // Tem mais de 5 caracteres, coloca o hífen e retorna o valor
  return `${cleanZipCode.slice(0, 5)}-${cleanZipCode.slice(5)}`;
}