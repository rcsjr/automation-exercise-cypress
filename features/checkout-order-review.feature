# language: pt

Funcionalidade: Revisão dos produtos do pedido

  Cenário: Revisar um produto antes de finalizar o pedido
    Dado que existe um usuário autenticado
    E que adicionou um produto ao carrinho
    Quando acessa a página de checkout
    Então deve visualizar o produto no resumo do pedido
    E deve visualizar corretamente seu nome, preço, quantidade e valor total