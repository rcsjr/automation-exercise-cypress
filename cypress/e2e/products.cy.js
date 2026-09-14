import { blueTop } from '../fixtures/produtos'
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

  it('Exibe os detalhes do produto Blue Top', () => {
   cy.contains('a', 'Products').click()

   cy.contains('.productinfo p', blueTop.nome)
     .closest('.product-image-wrapper')
     .contains('a', 'View Product')
     .click()

   cy.location('pathname').should('eq', '/product_details/1')

   cy.get('.product-information').within(() => {
    cy.contains('h2', 'Blue Top').should('be.visible')
    cy.contains('p', 'Category: Women > Tops').should('be.visible')
    cy.contains('span', 'Rs. 500').should('be.visible')

    cy.contains('b', 'Availability:')
      .parent()
      .should('contain', 'In Stock')

    cy.contains('b', 'Condition:')
      .parent()
      .should('contain', 'New')

    cy.contains('b', 'Brand:')
      .parent()
      .should('contain', 'Polo')
    })
 })
 
 it('Adiciona um produto ao carrinho', () => {
   cy.contains('a', 'Products').click()

   cy.contains('.productinfo p', blueTop.nome)
     .closest('.product-image-wrapper')
     .contains('a', 'View Product')
     .click()

   cy.location('pathname').should('eq', '/product_details/1')

   cy.get('#quantity').should('have.value', '1')
   cy.contains('button', 'Add to cart').click()

   cy.contains('h4', 'Added!').should('be.visible')
   cy.contains('p', 'Your product has been added to cart.')
     .should('be.visible')

   cy.contains('u', 'View Cart').click()

   cy.location('pathname').should('eq', '/view_cart')

   cy.get('#product-1').within(() => {
    cy.contains('a', 'Blue Top').should('be.visible')
    cy.get('.cart_price p').should('have.text', 'Rs. 500')
    cy.get('.cart_quantity button').should('have.text', '1')
    cy.get('.cart_total_price').should('have.text', 'Rs. 500')
    })
  })

  it('Adiciona quatro unidades de um produto ao carrinho', () => {
  const quantidade = '4'

  cy.contains('a', 'Products').click()

  cy.contains('.productinfo p', blueTop.nome)
    .closest('.product-image-wrapper')
    .contains('a', 'View Product')
    .click()

  cy.location('pathname').should('eq', '/product_details/1')

   cy.get('#quantity')
     .clear()
     .type(quantidade)
     .should('have.value', quantidade)

   cy.contains('button', 'Add to cart').click()

   cy.contains('h4', 'Added!').should('be.visible')
   cy.contains('u', 'View Cart').click()

   cy.location('pathname').should('eq', '/view_cart')

   cy.get('#product-1').within(() => {
     cy.contains('a', 'Blue Top').should('be.visible')
     cy.get('.cart_quantity button').should('have.text', quantidade)
    })
  })

})