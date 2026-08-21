# language: pt

Funcionalidade: Cadastro antes do checkout

  Cenário: Registrar um usuário antes de acessar o checkout
    Dado que acesso a página de cadastro
    Quando realizo o cadastro com dados válidos
    E adiciono um produto ao carrinho
    E avanço para o checkout
    Então devo acessar o checkout com o usuário autenticado