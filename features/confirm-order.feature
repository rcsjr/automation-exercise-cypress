# language: pt

Funcionalidade: Confirmação do pedido

  Cenário: Confirmar um pedido com dados de pagamento válidos
    Dado que existe um usuário autenticado
    E que possui um produto no checkout
    E informou dados de pagamento válidos
    Quando confirma o pedido
    Então deve ser direcionado para a página de pagamento concluído