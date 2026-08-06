describe('Carrinho de compras', () => {
    beforeEach(() => {
     cy.visit('/product_details/1')

     cy.contains('button', 'Add to cart').click()
     cy.contains('h4', 'Added!').should('be.visible')
     cy.contains('u', 'View Cart').click()

     cy.location('pathname').should('eq', '/view_cart')
    })

  it('Remove um produto do carrinho', () => {
     cy.get('#product-1').as('produtoNoCarrinho')

     cy.get('@produtoNoCarrinho').within(() => {
      cy.contains('a', 'Blue Top').should('be.visible')
      cy.get('.cart_quantity_delete').click()
     })

     cy.get('#product-1').should('not.exist')
    })

  it('Exibe dois produtos adicionados ao carrinho', () => {
     const produtos = [
     {
      id: '#product-1',
      nome: 'Blue Top',
      preco: 'Rs. 500'
     },
     {
      id: '#product-2',
      nome: 'Men Tshirt',
      preco: 'Rs. 400'
     }]

     cy.visit('/product_details/2')

     cy.contains('button', 'Add to cart').click()
     cy.contains('h4', 'Added!').should('be.visible')
     cy.contains('u', 'View Cart').click()

     cy.location('pathname').should('eq', '/view_cart')

     produtos.forEach(({ id, nome, preco }) => {
        cy.get(id).within(() => {
        cy.contains('a', nome).should('be.visible')
        cy.get('.cart_price p').should('have.text', preco)
        cy.get('.cart_quantity button').should('have.text', '1')
        cy.get('.cart_total_price').should('have.text', preco)
      })
     })
    })
})