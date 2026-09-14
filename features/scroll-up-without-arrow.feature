# language: pt

Funcionalidade: Retorno ao topo sem usar a seta

  Cenário: Rolar a página para cima diretamente
    Dado que estou na página inicial
    E rolei até o final da página
    Quando rolo a página diretamente para o topo
    Então a página deve retornar ao início
    E o conteúdo principal deve estar visível