# language: pt

Funcionalidade: Retorno ao topo da página

  Cenário: Rolar para cima usando a seta
    Dado que estou na página inicial
    E rolei até o final da página
    Quando clico na seta de retorno ao topo
    Então a página deve voltar ao início
    E o conteúdo principal deve estar visível