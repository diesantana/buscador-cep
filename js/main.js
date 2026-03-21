// =================================================================
// Controla o fluxo da aplicação
// =================================================================
import { clearZipCode, isValidZipCode, applyCEPMask } from "./utils/cep-utils.js";
import { renderErrorMessage, clearErrorMessage, renderAddress, clearAddress, showLoading, hiddenLoading} from "./ui/cep-ui.js";
import { fetchCep } from "./services/viacep.js";

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
        showLoading();

        // buscar os dados de viacep.js
        const data = await fetchCep(cleanZipCode);
        
        // renderiza os dados na UI
        renderAddress(data);
    } catch (error) {
        renderErrorMessage("Ocorreu um erro ao buscar o CEP, Verifique se o CEP informado é valido.");
    } finally {
        hiddenLoading();
    }
});

// Limpa a mensagem de erro e o endereço ao digitar
inputCEP.addEventListener("input", () => {
    inputCEP.value = applyCEPMask(inputCEP.value);
    clearErrorMessage();
    clearAddress();
});