# language: pt

Funcionalidade: Persistência dos produtos no carrinho

  Cenário: Manter o produto no carrinho após o login
    Dado que existe um usuário cadastrado
    E que pesquiso por um produto
    E adiciono o produto ao carrinho
    Quando realizo o login
    E acesso novamente o carrinho
    Então o produto deve continuar disponível no carrinho