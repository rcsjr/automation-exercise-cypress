describe('Produtos recomendados', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Adiciona um produto recomendado ao carrinho', () => {
    cy.contains('h2', 'recommended items')
      .scrollIntoView()
      .should('be.visible')

    cy.get('.recommended_items .item.active .product-image-wrapper')
      .first()
      .as('produtoRecomendado')

    cy.get('@produtoRecomendado')
      .find('p')
      .invoke('text')
      .then((nomeProduto) => {
        cy.get('@produtoRecomendado')
          .contains('a', 'Add to cart')
          .click()

        cy.contains('h4', 'Added!')
          .should('be.visible')

        cy.contains('u', 'View Cart').click()

        cy.location('pathname').should('eq', '/view_cart')

        cy.contains('.cart_description a', nomeProduto.trim())
          .should('be.visible')
      })
  })
})