# language: pt

Funcionalidade: Produtos
  Como visitante da loja
  Quero visualizar os produtos disponíveis
  Para escolher um produto para comprar

  Cenário: Visualizar a lista de produtos
    Dado que acesso a página inicial
    Quando acesso a página de produtos
    Então devo visualizar o título "All Products"
    E devo visualizar produtos disponíveis

  Cenário: Buscar um produto pelo nome
    Dado que acesso a página de produtos
    Quando pesquiso pelo produto "Blue Top"
    Então devo visualizar a área de produtos pesquisados
    E devo visualizar o produto "Blue Top" no resultado    