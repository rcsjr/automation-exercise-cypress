# language: pt

Funcionalidade: Cadastro durante o checkout

  Cenário: Registrar um usuário ao tentar acessar o checkout
    Dado que não estou autenticado
    E que possuo um produto no carrinho
    Quando tento avançar para o checkout
    Então devo ser orientado a realizar login ou cadastro
    Quando realizo o cadastro com dados válidos
    E acesso novamente o carrinho
    Então devo conseguir avançar para o checkout autenticado