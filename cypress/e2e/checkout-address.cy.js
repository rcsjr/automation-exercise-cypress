describe('Endereços do checkout', () => {
  const usuario = {
    nome: 'Robson Junior',
    email: `robson${Date.now()}@email.com`,
    senha: 'Senha@123',
    primeiroNome: 'Robson',
    sobrenome: 'Junior',
    empresa: 'QA Automation',
    endereco: 'Rua dos Testes, 100',
    complemento: 'Centro',
    pais: 'Canada',
    estado: 'São Paulo',
    cidade: 'São Paulo',
    cep: '01001-000',
    telefone: '11999999999'
  }

  beforeEach(() => {
  cy.api_criarUsuario(usuario)
})

  afterEach(() => {
  cy.api_excluirUsuario(usuario)
})

  it('Exibe corretamente os endereços de entrega e cobrança', () => {
    const validarEndereco = (seletor) => {
      cy.get(seletor).within(() => {
        cy.contains(`${usuario.primeiroNome} ${usuario.sobrenome}`)
          .should('be.visible')

        cy.contains(usuario.empresa).should('be.visible')
        cy.contains(usuario.endereco).should('be.visible')
        cy.contains(usuario.complemento).should('be.visible')
        cy.contains(usuario.cidade).should('be.visible')
        cy.contains(usuario.estado).should('be.visible')
        cy.contains(usuario.cep).should('be.visible')
        cy.contains(usuario.pais).should('be.visible')
        cy.contains(usuario.telefone).should('be.visible')
      })
    }

    cy.visit('/login')
    cy.loginUsuario(usuario)

    cy.visit('/product_details/1')

    cy.contains('button', 'Add to cart').click()

    cy.contains('h4', 'Added!')
      .should('be.visible')

    cy.contains('u', 'View Cart').click()

    cy.contains('a', 'Proceed To Checkout').click()

    cy.location('pathname').should('eq', '/checkout')

    cy.contains('h2', 'Address Details')
      .should('be.visible')

    cy.contains('h2', 'Review Your Order')
      .should('be.visible')

    validarEndereco('#address_delivery')
    validarEndereco('#address_invoice')
  })
})