# language: pt

Funcionalidade: Download da nota fiscal

  Cenário: Baixar a nota fiscal após concluir uma compra
    Dado que existe um usuário autenticado
    E que possui um produto no checkout
    E informou dados de pagamento válidos
    Quando confirma o pedido
    Então a compra deve ser concluída com sucesso
    Quando solicita o download da nota fiscal
    Então o download deve ser iniciado