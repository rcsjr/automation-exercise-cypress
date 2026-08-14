describe('Inscrição por e-mail', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Realiza a inscrição pelo rodapé da página inicial', () => {
    const email = `robson${Date.now()}@email.com`

    cy.contains('h2', 'Subscription')
      .scrollIntoView()
      .should('be.visible')

    cy.get('#susbscribe_email')
      .type(email)
      .should('have.value', email)

    cy.get('#subscribe').click()

    cy.contains(
      '.alert-success',
      'You have been successfully subscribed!'
    ).should('be.visible')
  })

  it('Realiza a inscrição pelo rodapé do carrinho', () => {
  const email = `robson${Date.now()}@email.com`

  cy.contains('a', 'Cart').click()

  cy.location('pathname').should('eq', '/view_cart')

  cy.scrollTo('bottom')

  cy.contains('h2', 'Subscription').should('be.visible')

  cy.get('#susbscribe_email')
    .type(email)
    .should('have.value', email)

  cy.get('#subscribe').click()

  cy.contains(
    '.alert-success',
    'You have been successfully subscribed!'
  ).should('be.visible')
  })
})