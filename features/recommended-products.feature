# language: pt

Funcionalidade: Produtos recomendados

  Cenário: Adicionar um produto recomendado ao carrinho
    Dado que acesso a página inicial
    E visualizo a seção de produtos recomendados
    Quando adiciono um produto recomendado ao carrinho
    E acesso o carrinho
    Então o produto selecionado deve estar disponível no carrinho