describe('Produtos', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Exibe a lista de produtos disponíveis', () => {
    cy.contains('a', 'Products').click()

    cy.location('pathname').should('eq', '/products')
    cy.contains('h2', 'All Products').should('be.visible')

    cy.get('.features_items .product-image-wrapper')
      .should('have.length.greaterThan', 0)
      .and('be.visible')
  })

  it('Busca um produto pelo nome', () => {
    const nomeProduto = 'Blue Top'

    cy.contains('a', 'Products').click()

    cy.get('#search_product').type(nomeProduto)
    cy.get('#search_product').should('have.value', nomeProduto)
    cy.get('#submit_search').click()

    cy.contains('h2', 'Searched Products').should('be.visible')

    cy.get('.features_items').within(() => {
    cy.contains('.productinfo p', nomeProduto).should('be.visible')
  })
 })
})