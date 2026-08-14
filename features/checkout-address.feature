# language: pt

Funcionalidade: Endereços do checkout

  Cenário: Validar os endereços de entrega e cobrança
    Dado que existe um usuário cadastrado
    E que o usuário está autenticado
    E possui um produto no carrinho
    Quando acessa a página de checkout
    Então o endereço de entrega deve possuir os dados cadastrados
    E o endereço de cobrança deve possuir os dados cadastrados