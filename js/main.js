// =================================================================
// Controla o fluxo da aplicação
// =================================================================
import { clearZipCode, isValidZipCode } from "./utils/cep-utils.js";
import { renderErrorMessage, clearErrorMessage, renderAddress } from "./ui/cep-ui.js";
import { fetchCep } from "./services/viacep.js";
/*
main.js
    submit do form
    → pega input.value
    → limpa
    → valida
    → busca na API
    → atualiza UI
*/

// Elementos
const form = document.querySelector("#cep-form");
const inputCEP = document.querySelector("#cep");

// Manipula o submit do form
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const enteredValue = inputCEP.value; // Valor digitado
    const cleanZipCode = clearZipCode(enteredValue); // Limpa o CEP

    // Verifica se o CEP informado é um CEP válido
    const isValid = isValidZipCode(cleanZipCode);

    if (!isValid) {
        // renderiza mensagem de erro 
        renderErrorMessage("O CEP informado é inválido!");
        return;
    }

    // Buscar o CEP na API
    try {
        // buscar os dados de viacep.js
        const data = await fetchCep(cleanZipCode);
        
        // renderiza os dados na UI
        renderAddress(data);
    } catch (error) {
        renderErrorMessage("Ocorreu um erro ao buscar o CEP, Verifique se o CEP informado é valido.");
    }

});

// Limpa a mensagem de erro ao digitar
form.addEventListener("input", (event) => {
    clearErrorMessage();
});