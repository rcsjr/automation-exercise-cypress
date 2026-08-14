# language: pt

Funcionalidade: Inscrição por e-mail
  Como visitante da aplicação
  Quero cadastrar meu e-mail
  Para receber atualizações da loja

  Cenário: Realizar inscrição pela página inicial
    Dado que acesso a página inicial
    Quando navego até a seção de inscrição
    E informo um endereço de e-mail
    E confirmo a inscrição
    Então devo visualizar uma mensagem de inscrição realizada com sucesso

  Cenário: Realizar inscrição pela página do carrinho
    Dado que acesso a página do carrinho
    Quando navego até o final da página
    E informo um endereço de e-mail
    E confirmo a inscrição
    Então devo visualizar uma mensagem de inscrição realizada com sucesso