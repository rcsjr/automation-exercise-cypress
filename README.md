# Automation Exercise — Testes automatizados com Cypress

Projeto de estudos voltado à automação de testes end-to-end da aplicação [Automation Exercise](https://automationexercise.com/) utilizando Cypress e JavaScript.

O objetivo é praticar a construção de cenários automatizados próximos de situações reais de um e-commerce, incluindo preparação de dados por API, validações de interface, documentação BDD e versionamento com Git e GitHub.

> Status do projeto: em desenvolvimento

## Tecnologias utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript
- Node.js e npm
- BDD com Gherkin
- Git e GitHub

## Cenários automatizados

### Cadastro e autenticação

- Início do cadastro com dados válidos
- Cadastro completo de um novo usuário
- Exclusão da conta criada durante o teste
- Tentativa de cadastro com e-mail existente
- Login com usuário cadastrado
- Tentativa de login com senha incorreta
- Logout do usuário

### Produtos e catálogo

- Visualização da lista de produtos
- Pesquisa de produto
- Visualização dos detalhes de um produto
- Adição de produto ao carrinho
- Adição de quatro unidades de um produto ao carrinho

### Carrinho

- Validação de dois produtos no carrinho
- Remoção de produto do carrinho

## Estrutura do projeto

```text
automation-exercise-cypress/
├── cypress/
│   ├── e2e/                 # Testes automatizados
│   ├── fixtures/            # Massa de dados e arquivos de apoio
│   └── support/             # Comandos e configurações de suporte
├── features/                # Cenários BDD escritos em Gherkin
├── cypress.config.js        # Configuração do Cypress
├── package.json             # Dependências e scripts do projeto
└── README.md                # Documentação do projeto
```

## Pré-requisitos

Antes de executar o projeto, instale:

- [Node.js](https://nodejs.org/)
- npm, instalado juntamente com o Node.js
- Git

## Instalação

Clone o repositório:

```bash
git clone https://github.com/rcsjr/automation-exercise-cypress.git
```

Acesse a pasta do projeto:

```bash
cd automation-exercise-cypress
```

Instale as dependências:

```bash
npm install
```

## Execução dos testes

Para abrir a interface do Cypress:

```bash
npm run cy:open
```

Para executar todos os testes em modo headless:

```bash
npm run cy:run
```

## Estratégia utilizada

- Os títulos dos testes são escritos em português para facilitar o estudo e a leitura dos cenários
- Os dados necessários para determinados testes são preparados por API com `cy.request()`
- Os elementos são localizados preferencialmente por atributos `data-qa`
- As contas criadas durante os testes são excluídas ao final da execução
- Os cenários de negócio são documentados em arquivos `.feature`
- Cada teste valida tanto a ação executada quanto o resultado esperado

## Próximas melhorias

- Concluir os cenários planejados para o Automation Exercise
- Refatorar trechos repetidos utilizando comandos personalizados
- Adicionar execução automatizada com GitHub Actions
- Gerar relatórios de execução
- Adicionar evidências visuais dos testes

## Autor

Desenvolvido por [Robson Junior](https://www.linkedin.com/in/robson-junior-qa/) como parte dos estudos e da evolução profissional em Qualidade de Software e Automação de Testes.
