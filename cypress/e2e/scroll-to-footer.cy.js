describe('Navegação até o rodapé da página', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Rola a página até a seção de assinatura', () => {
    cy.location('pathname')
      .should('eq', '/')

    cy.scrollTo('bottom')

    cy.contains('h2', 'Subscription')
      .should('be.visible')
  })
})