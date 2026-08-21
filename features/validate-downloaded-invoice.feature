# language: pt

Funcionalidade: Validação da nota fiscal baixada

  Cenário: Validar o arquivo da nota fiscal após uma compra
    Dado que concluí uma compra com sucesso
    Quando realizo o download da nota fiscal
    Então o arquivo deve ser salvo na pasta de downloads
    E deve conter o nome do comprador e o valor da compra