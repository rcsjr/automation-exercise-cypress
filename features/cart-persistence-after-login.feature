# language: pt

Funcionalidade: Persistência do carrinho após o login

  Cenário: Manter os produtos no carrinho depois da autenticação
    Dado que existe um usuário cadastrado
    E que adicionei produtos ao carrinho sem estar autenticado
    Quando realizo o login com credenciais válidas
    E acesso o carrinho
    Então os produtos adicionados antes do login devem permanecer no carrinho
    E seus nomes, preços, quantidades e valores totais devem estar corretos