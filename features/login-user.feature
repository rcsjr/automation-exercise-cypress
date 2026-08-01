# language: pt

Funcionalidade: Login de usuário
  Como usuário cadastrados
  Quero acessar minha conta
  Para utilizar os recursos disponíveis para usuários autenticados

  Cenário: Entrar com um usuário cadastrado
    Dado que possuo uma conta cadastrada
    E acesso a página de cadastro e login
    Quando informo meu e-mail e minha senha
    E solicito o login
    Então devo visualizar que estou autenticado

  Cenário: Tentar entrar com senha incorreta
    Dado que possuo uma conta cadastrada
    E acesso a página de cadastro e login
    Quando informo meu e-mail e uma senha incorreta
    E solicito o login
    Então devo visualizar uma mensagem de credenciais inválidas
    E devo permanecer na página de login   