describe('Catálogo de produtos', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Exibe os produtos de uma categoria feminina', () => {
    cy.get('.left-sidebar')
      .should('be.visible')
      .find('a[href="#Women"]')
      .click()

    cy.get('#Women')
      .should('be.visible')
      .contains('a', 'Tops')
      .click()

    cy.location('pathname').should('eq', '/category_products/2')

    cy.contains('h2', 'Women - Tops Products')
      .should('be.visible')

    cy.get('.features_items .product-image-wrapper')
      .should('have.length.greaterThan', 0)
      .and('be.visible')
  })
})