describe('Retorno ao topo sem usar a seta', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Rola a página para cima diretamente', () => {
    cy.scrollTo('bottom')

    cy.contains('h2', 'Subscription')
      .should('be.visible')

    cy.scrollTo('top')

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