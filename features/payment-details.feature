# language: pt

Funcionalidade: Dados de pagamento

  Cenário: Preencher os dados de pagamento
    Dado que existe um usuário autenticado
    E que possui um produto no checkout
    Quando avança para a página de pagamento
    E preenche os dados do cartão
    Então os dados devem permanecer preenchidos corretamente