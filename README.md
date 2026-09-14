# Automation Exercise — Testes automatizados com Cypress

Projeto de estudos voltado à automação de testes end-to-end da aplicação [Automation Exercise](https://automationexercise.com/) utilizando Cypress e JavaScript.

O objetivo é praticar a construção de cenários automatizados próximos de situações reais de um e-commerce, incluindo preparação de dados por API, validações de interface, documentação BDD e versionamento com Git e GitHub.

> Status do projeto: automação implementada e em fase de documentação e integração contínua.

## Tecnologias utilizadas

- [Cypress 15.19.0](https://www.cypress.io/)
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

- Títulos dos testes escritos em português para facilitar o entendimento dos cenários
- Preparação e limpeza de dados por API para reduzir o tempo de execução
- Comandos personalizados para criação, autenticação e exclusão de usuários
- Massas de usuário, pagamento e produtos centralizadas em arquivos reutilizáveis
- E-mails dinâmicos para garantir independência entre os testes
- Uso preferencial de atributos `data-qa` e seletores contextualizados
- Limpeza condicional das contas criadas durante os testes
- Cenários de negócio documentados em arquivos `.feature`
- Execução independente dos testes, sem dependência da ordem da suíte

## Próximas melhorias

- Configurar execução automatizada com GitHub Actions
- Adicionar o status do pipeline ao README
- Gerar relatórios de execução
- Adicionar evidências visuais dos testes

## Resultado atual

A suíte completa possui:

- 27 arquivos de especificação
- 40 testes automatizados
- 40 testes aprovados
- Nenhum teste pendente ou ignorado

Última execução completa realizada em modo headless:

```text
All specs passed!
40 passing
```

## Autor

Desenvolvido por [Robson Junior](https://www.linkedin.com/in/robson-junior-qa/) como parte dos estudos e da evolução profissional em Qualidade de Software e Automação de Testes.
