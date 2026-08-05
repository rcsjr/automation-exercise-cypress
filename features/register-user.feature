# language: pt

Funcionalidade: Cadastro e autenticação de usuário
  Como visitante da loja
  Quero cadastrar uma conta ou acessar uma conta existente
  Para utilizar os recursos disponíveis para usuários autenticados

  Cenário: Iniciar o cadastro com dados válidos
    Dado que acesso a página de cadastro e login
    Quando informo um nome e um e-mail ainda não cadastrado
    E solicito a criação da conta
    Então devo visualizar o formulário de informações da conta

  Cenário: Tentar entrar com dados inválidos
    Dado que acesso a página de cadastro e login
    Quando informo um e-mail e uma senha inválidos
    E solicito o login
    Então devo visualizar a mensagem de credenciais inválidas

  Cenário: Cadastrar um novo usuário com sucesso
    Dado que inicio o cadastro com nome e e-mail válidos
    Quando preencho as informações obrigatórias da conta
    E confirmo a criação da conta
    Então devo visualizar a confirmação de conta criada
    E devo estar autenticado na aplicação

  Cenário: Cadastrar um novo usuário com sucesso
    Dado que inicio o cadastro com nome e e-mail válidos
    Quando preencho as informações obrigatórias da conta
    E confirmo a criação da conta
    Então devo visualizar a confirmação de conta criada
    E devo estar autenticado na aplicação
    E excluo a conta criada
    Então devo visualizar a confirmação de conta excluída
  
  Cenário: Tentar cadastrar um e-mail já existente
    Dado que existe um usuário cadastrado
    E acesso a página de cadastro e login
    Quando informo o nome e o e-mail do usuário cadastrado
    E solicito um novo cadastro
    Então devo visualizar uma mensagem informando que o e-mail já existe