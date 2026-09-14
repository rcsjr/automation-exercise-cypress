describe('Dados de pagamento', () => {
  const usuario = {
    nome: 'Robson Junior',
    email: `robson${Date.now()}@email.com`,
    senha: 'Senha@123'
  }

  beforeEach(() => {
  cy.api_criarUsuario(usuario)

  cy.session(usuario.email, () => {
    cy.visit('/login')
    cy.loginUsuario(usuario)
  })
})

  afterEach(() => {
  cy.api_excluirUsuario(usuario)
})

  it('Preenche os dados de pagamento', () => {
        const pagamento = {
          nomeCartao: 'Robson Junior',
          numeroCartao: '4111111111111111',
          cvc: '123',
          mesExpiracao: '12',
          anoExpiracao: '2030'
        }
    
        cy.visit('/product_details/1')
    
        cy.contains('button', 'Add to cart').click()
    
        cy.contains('h4', 'Added!')
          .should('be.visible')
    
        cy.contains('u', 'View Cart').click()
    
        cy.contains('a', 'Proceed To Checkout').click()
    
        cy.location('pathname').should('eq', '/checkout')
    
        cy.contains('a', 'Place Order').click()
    
        cy.location('pathname').should('eq', '/payment')
    
        cy.get('[data-qa="name-on-card"]')
          .type(pagamento.nomeCartao)
          .should('have.value', pagamento.nomeCartao)
    
        cy.get('[data-qa="card-number"]')
          .type(pagamento.numeroCartao)
          .should('have.value', pagamento.numeroCartao)
    
        cy.get('[data-qa="cvc"]')
          .type(pagamento.cvc)
          .should('have.value', pagamento.cvc)
    
        cy.get('[data-qa="expiry-month"]')
          .type(pagamento.mesExpiracao)
          .should('have.value', pagamento.mesExpiracao)
    
        cy.get('[data-qa="expiry-year"]')
          .type(pagamento.anoExpiracao)
          .should('have.value', pagamento.anoExpiracao)
    
        cy.get('[data-qa="pay-button"]')
          .should('be.visible')
          .and('be.enabled')
   })
})