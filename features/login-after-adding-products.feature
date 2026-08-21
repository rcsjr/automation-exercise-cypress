# language: pt

Funcionalidade: Login após adicionar produtos

  Cenário: Fazer login depois de adicionar um produto ao carrinho
    Dado que existe um usuário cadastrado
    E que não estou autenticado
    Quando adiciono um produto ao carrinho
    E realizo o login com credenciais válidas
    Então devo ser autenticado com sucesso