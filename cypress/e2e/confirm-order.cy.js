describe('Confirmação do pedido', () => {
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

  it('Confirma um pedido com dados de pagamento válidos', () => {
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
  
      cy.get('[data-qa="card-number"]')
        .type(pagamento.numeroCartao)
  
      cy.get('[data-qa="cvc"]')
        .type(pagamento.cvc)
  
      cy.get('[data-qa="expiry-month"]')
        .type(pagamento.mesExpiracao)
  
      cy.get('[data-qa="expiry-year"]')
        .type(pagamento.anoExpiracao)
  
      cy.intercept('POST', '**/payment').as('confirmarPagamento')

      cy.get('[data-qa="pay-button"]')
        .should('be.visible')
        .and('be.enabled')
        .click()
          
      cy.wait('@confirmarPagamento')
        .its('response.statusCode')
        .should('eq', 302)
      
      cy.location('pathname')
        .should('match', /^\/payment_done\/\d+$/)
      
      cy.contains('b', 'Order Placed!')
        .should('be.visible')
      
      cy.contains(
        'p',
        'Congratulations! Your order has been confirmed!'
      ).should('be.visible')
   })
})