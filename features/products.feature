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

  Cenário: Visualizar os detalhes de um produto
    Dado que acesso a página de produtos
    Quando solicito a visualização do primeiro produto
    Então devo ser direcionado para a página de detalhes
    E devo visualizar o nome do produto
    E devo visualizar sua categoria e preço
    E devo visualizar sua disponibilidade, condição e marca

  Cenário: Adicionar um produto ao carrinho
    Dado que acesso os detalhes do primeiro produto
    Quando adiciono o produto ao carrinho
    E acesso o carrinho
    Então devo visualizar o produto adicionado
    E devo visualizar seu preço, quantidade e valor total

  Cenário: Adicionar múltiplas unidades de um produto ao carrinho
    Dado que acesso os detalhes do primeiro produto
    E altero a quantidade para quatro unidades
    Quando adiciono o produto ao carrinho
    E acesso o carrinho
    Então devo visualizar o produto com quantidade igual a quatro  