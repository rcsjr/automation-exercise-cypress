# language: pt

Funcionalidade: Formulário de contato
  Como visitante da aplicação
  Quero enviar uma mensagem para a equipe
  Para solicitar atendimento

  Cenário: Enviar formulário de contato com arquivo
    Dado que acesso a página de contato
    Quando informo meu nome, e-mail, assunto e mensagem
    E seleciono um arquivo
    E confirmo o envio do formulário
    Então devo visualizar uma mensagem de envio bem-sucedido
    E devo conseguir retornar à página inicial