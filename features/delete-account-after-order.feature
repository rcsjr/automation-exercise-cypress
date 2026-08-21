# language: pt

Funcionalidade: Exclusão da conta após o pedido

  Cenário: Excluir a conta utilizada em um pedido concluído
    Dado que existe um usuário autenticado
    E que realizou um pedido com sucesso
    Quando solicita a exclusão da conta
    Então a conta deve ser excluída com sucesso
    E deve ser direcionado para a página inicial