# language: pt

Funcionalidade: Login antes do checkout

  Cenário: Realizar login antes de acessar o checkout
    Dado que existe um usuário cadastrado
    E que acesso a página de login
    Quando realizo o login com credenciais válidas
    E adiciono um produto ao carrinho
    E avanço para o checkout
    Então devo acessar a página de checkout autenticado