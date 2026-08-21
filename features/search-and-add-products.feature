# language: pt

Funcionalidade: Pesquisa e adição de produtos ao carrinho

  Cenário: Pesquisar produtos e adicioná-los ao carrinho
    Dado que estou na página de produtos
    Quando pesquiso por produtos com o termo "Top"
    Então devo visualizar os produtos relacionados à pesquisa
    Quando adiciono dois produtos encontrados ao carrinho
    Então devo visualizar os dois produtos no carrinho
    E seus nomes, preços, quantidades e valores totais devem estar corretos