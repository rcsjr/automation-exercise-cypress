describe('Navegação', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Acessa a página de casos de teste', () => {
    cy.contains('a', 'Test Cases')
      .should('have.attr', 'href', '/test_cases')
      .click()

    cy.location('pathname').should('eq', '/test_cases')

    cy.contains('b', 'Test Cases').should('be.visible')
    cy.get('.panel-group').should('be.visible')
  })
})