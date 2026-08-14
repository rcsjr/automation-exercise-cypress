# language: pt

Funcionalidade: Catálogo de produtos por categoria

  Cenário: Visualizar produtos de uma categoria feminina
    Dado que acesso a página inicial
    Quando seleciono a categoria feminina "Tops"
    Então devo ser direcionado para a página da categoria
    E devo visualizar os produtos da categoria "Women - Tops Products"

  Cenário: Alternar entre categorias femininas e masculinas
    Dado que acesso a página inicial
    E seleciono a categoria feminina "Tops"
    Quando seleciono a categoria masculina "Tshirts"
    Então devo ser direcionado para a categoria masculina
    E devo visualizar os produtos da categoria "Men - Tshirts Products"

  Cenário: Visualizar produtos de uma marca
    Dado que acesso a página de produtos
    Quando seleciono a marca "Polo"
    Então devo ser direcionado para a página da marca
    E devo visualizar os produtos da marca "Polo"

  Cenário: Alternar entre marcas de produtos
    Dado que acesso os produtos da marca "Polo"
    Quando seleciono a marca "Babyhug"
    Então devo ser direcionado para a página da nova marca
    E devo visualizar os produtos da marca "Babyhug"  