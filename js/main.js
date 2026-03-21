// =================================================================
// Controla o fluxo da aplicação
// =================================================================
import { clearZipCode, isValidZipCode } from "./utils/cep-utils.js";
import { renderErrorMessage } from "./ui/cep-ui.js";
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


form.addEventListener("submit", (event) => {
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

    
});

