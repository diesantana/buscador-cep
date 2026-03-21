# Buscador de CEP

Aplicação web desenvolvida em **JavaScript Vanilla** para consulta de endereços a partir de um CEP, utilizando a API pública **ViaCEP**.

O projeto foi criado com foco em prática de fundamentos importantes do front-end, como consumo de API com `fetch`, uso de `async/await`, manipulação do DOM, validação de dados e organização modular do código com separação de responsabilidades.

## 🔗 Demo

- **Aplicação online:** [Acessar projeto](https://diesantana.github.io/buscador-cep/)
- **Repositório:** [Ver código no GitHub](https://github.com/diesantana/buscador-cep)

## 📖 Sobre o projeto

A proposta da aplicação é simples: o usuário informa um CEP, o sistema valida o valor digitado, consulta a API ViaCEP e exibe o endereço correspondente na tela.

Apesar de ser um projeto enxuto, ele foi estruturado com foco em organização e clareza, simulando uma divisão de responsabilidades comum em aplicações maiores.

## ✨ Funcionalidades

- Consulta de endereço por CEP
- Limpeza e validação do valor digitado
- Máscara automática no campo de CEP
- Exibição de mensagens de erro para CEP inválido ou inexistente
- Atualização dinâmica da interface com os dados retornados pela API
- Limpeza de erro e resultado ao iniciar uma nova digitação
- Estado de carregamento durante a requisição

## 🛠 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript Vanilla
- API ViaCEP

## 📂 Estrutura do projeto

```bash
├── index.html
├── css
│   └── style.css
└── js
    ├── main.js
    ├── services
    │   └── viacep.js
    ├── ui
    │   └── cep-ui.js
    └── utils
        └── cep-utils.js

```
## 🧩 Organização da aplicação

A aplicação foi dividida em módulos para manter o código mais limpo e fácil de manter:

- main.js: controla o fluxo principal da aplicação
- services/viacep.js: faz a comunicação com a API
- ui/cep-ui.js: atualiza a interface e manipula o DOM
- utils/cep-utils.js: concentra funções auxiliares como limpeza, validação e formatação do CEP

## ▶️ Como executar localmente

1. Clone o repositório:
```bash
git clone https://github.com/diesantana/buscador-cep.git
```

2. Acesse a pasta do projeto:
```bash
cd buscador-cep
```

3. Abra o arquivo index.html no navegador

## 📚 Conceitos praticados

Durante o desenvolvimento deste projeto, foram trabalhados os seguintes conceitos:

- consumo de API com fetch
- uso de async/await
- tratamento de erros com try/catch/finally
- manipulação de eventos no DOM
- atualização dinâmica da interface
- validação e formatação de dados
- modularização em JavaScript
- separação de responsabilidades

## 🚀 Publicação

Este projeto foi publicado com GitHub Pages, permitindo acesso online sem necessidade de instalação.

## 👨‍💻 Autor

Desenvolvido por Diego Alves Santana.

- [LinkedIn](https://www.linkedin.com/in/die-santana/)