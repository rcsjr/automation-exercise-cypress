# language: pt

Funcionalidade: Carrinho de compras
  Como visitante da loja
  Quero gerenciar os produtos do carrinho
  Para manter somente os produtos que desejo comprar

    Cenário: Remover um produto do carrinho
      Dado que adicionei um produto ao carrinho
      E estou visualizando o carrinho
      Quando removo o produto
      Então o produto não deve mais aparecer no carrinho
      
    Cenário: Visualizar dois produtos no carrinho
      Dado que adicionei dois produtos diferentes ao carrinho
      Quando acesso o carrinho
      Então devo visualizar os dois produtos
      E cada produto deve apresentar nome, preço, quantidade e total
