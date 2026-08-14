# language: pt

Funcionalidade: Avaliação de produto

  Cenário: Enviar uma avaliação de produto
    Dado que acesso os detalhes de um produto
    E visualizo o formulário de avaliação
    Quando informo meu nome, e-mail e comentário
    E envio a avaliação
    Então devo visualizar a confirmação de envio da avaliação