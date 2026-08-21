# language: pt

Funcionalidade: Comentário do pedido

  Cenário: Preencher um comentário antes de finalizar o pedido
    Dado que existe um usuário autenticado
    E que possui um produto no carrinho
    Quando acessa a página de checkout
    E preenche o comentário do pedido
    Então o comentário deve permanecer preenchido corretamente