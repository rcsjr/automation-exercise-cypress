# Automation Exercise — Testes automatizados com Cypress

[![Cypress E2E](https://github.com/rcsjr/automation-exercise-cypress/actions/workflows/cypress.yml/badge.svg)](https://github.com/rcsjr/automation-exercise-cypress/actions/workflows/cypress.yml)

Projeto de estudos voltado à automação de testes end-to-end da aplicação [Automation Exercise](https://automationexercise.com/) utilizando Cypress e JavaScript.

O objetivo é praticar a construção de cenários automatizados próximos de situações reais de um e-commerce, incluindo preparação de dados por API, validações de interface, documentação BDD e versionamento com Git e GitHub.

> Status do projeto: automação implementada, documentada e integrada ao GitHub Actions.

## Tecnologias utilizadas

- [Cypress 15.19.0](https://www.cypress.io/)
- JavaScript
- Node.js e npm
- BDD com Gherkin
- Git e GitHub

## Cenários automatizados

Atualmente, o projeto possui 40 testes automatizados distribuídos entre os módulos abaixo.

### Cadastro e autenticação

- Início do cadastro com dados válidos
- Cadastro completo de um novo usuário
- Tentativa de cadastro com e-mail existente
- Login com usuário cadastrado
- Tentativa de login com credenciais inválidas
- Tentativa de login com senha incorreta
- Logout de usuário autenticado

### Produtos, catálogo e avaliações

- Visualização da lista de produtos disponíveis
- Pesquisa de produto pelo nome
- Visualização dos detalhes do produto Blue Top
- Adição de produto ao carrinho
- Adição de quatro unidades de um produto ao carrinho
- Visualização de produtos de uma categoria feminina
- Alternância entre categorias femininas e masculinas
- Visualização dos produtos de uma marca
- Alternância entre marcas de produtos
- Envio de avaliação de produto
- Adição de produto recomendado ao carrinho
- Pesquisa e adição de dois produtos ao carrinho

### Carrinho

- Remoção de produto do carrinho
- Validação de dois produtos adicionados ao carrinho
- Persistência dos produtos no carrinho após o login
- Login após adicionar um produto ao carrinho

### Checkout, pagamento e pedido

- Validação dos endereços de entrega e cobrança
- Preenchimento de comentário no checkout
- Login antes de acessar o checkout
- Validação dos produtos no resumo do pedido
- Cadastro de usuário antes do checkout
- Cadastro de usuário durante o checkout
- Preenchimento dos dados de pagamento
- Confirmação de pedido com dados de pagamento válidos
- Exclusão da conta após a conclusão do pedido
- Download e validação do conteúdo da nota fiscal

### Contato

- Envio de mensagem de contato com arquivo anexado

### Navegação e assinatura

- Acesso à página de casos de teste
- Rolagem da página até o rodapé
- Retorno ao topo utilizando a seta da aplicação
- Retorno ao topo utilizando a rolagem do navegador
- Inscrição por e-mail pelo rodapé da página inicial
- Inscrição por e-mail pelo rodapé do carrinho

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

Antes de executar o projeto, é necessário possuir:

- [Node.js](https://nodejs.org/) compatível com o Cypress 15
- npm, instalado juntamente com o Node.js
- [Git](https://git-scm.com/)
- Conexão com a internet para acessar a aplicação Automation Exercise

Para verificar as instalações:

```bash
node --version
npm --version
git --version
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/rcsjr/automation-exercise-cypress.git
```

Acesse a pasta do projeto:

```bash
cd automation-exercise-cypress
```

Instale as dependências registradas no `package-lock.json`:

```bash
npm ci
```

O `npm ci` realiza uma instalação limpa utilizando exatamente as versões registradas no arquivo de lock. Para atualizar ou adicionar dependências durante o desenvolvimento, utilize:

```bash
npm install
```

## Execução dos testes

### Modo interativo

Para abrir a interface do Cypress:

```bash
npm run cy:open
```

Na interface, selecione o modo **E2E Testing**, escolha um navegador e execute o arquivo desejado.

### Modo headless

Para executar toda a suíte sem abrir a interface gráfica:

```bash
npm run cy:run
```

Esse é o modo utilizado para regressões completas e futuras execuções no pipeline.

### Executar um arquivo específico

```bash
npx cypress run --spec "cypress/e2e/login-user.cy.js"
```

Substitua `login-user.cy.js` pelo arquivo que deseja executar.

### Executar vários arquivos específicos

```bash
npx cypress run --spec "cypress/e2e/products.cy.js,cypress/e2e/cart.cy.js"
```

### Executar em um navegador específico

```bash
npx cypress run --browser chrome
```

Por padrão, a aplicação testada é definida no `cypress.config.js`:

```js
baseUrl: 'https://automationexercise.com'
```

Por isso, os testes podem utilizar caminhos relativos:

```js
cy.visit('/login')
cy.visit('/products')
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
