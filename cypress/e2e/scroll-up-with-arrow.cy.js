describe('Retorno ao topo usando a seta', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Rola a página para cima usando a seta', () => {
    cy.scrollTo('bottom')

    cy.contains('h2', 'Subscription')
      .should('be.visible')

    cy.get('#scrollUp')
      .should('be.visible')
      .click()

    cy.window()
      .its('scrollY')
      .should('eq', 0)

    cy.contains(
      'h2',
      'Full-Fledged practice website for Automation Engineers'
    )
      .filter(':visible')
      .should('be.visible')
  })
})