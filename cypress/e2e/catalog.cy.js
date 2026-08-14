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

  it('Alterna entre categorias femininas e masculinas', () => {
     cy.get('.left-sidebar')
     .find('a[href="#Women"]')
     .click()

     cy.get('#Women')
     .should('be.visible')
     .contains('a', 'Tops')
      .click() 

     cy.location('pathname').should('eq', '/category_products/2') 

     cy.contains('h2', 'Women - Tops Products')
     .should('be.visible') 

     cy.get('.left-sidebar')
     .find('a[href="#Men"]')
     .click() 

     cy.get('#Men')
     .should('be.visible')
     .contains('a', 'Tshirts')
     .click() 

     cy.location('pathname').should('eq', '/category_products/3') 

     cy.contains('h2', 'Men - Tshirts Products')
     .should('be.visible') 

     cy.get('.features_items .product-image-wrapper')
     .should('have.length.greaterThan', 0)
     .and('be.visible')
  })

  it('Exibe os produtos de uma marca', () => {
     cy.contains('a', 'Products').click()
 
     cy.location('pathname').should('eq', '/products')
 
     cy.contains('h2', 'Brands')
     .should('be.visible')
 
     cy.contains('.brands-name a', 'Polo')
     .should('be.visible')
     .click()
 
     cy.location('pathname').should('eq', '/brand_products/Polo')
 
     cy.contains('h2', 'Brand - Polo Products')
     .should('be.visible')
 
     cy.get('.features_items .product-image-wrapper')
     .should('have.length.greaterThan', 0)
     .and('be.visible')
  })

  it('Alterna entre marcas de produtos', () => {
    cy.contains('a', 'Products').click()
  
    cy.contains('.brands-name a', 'Polo')
      .should('be.visible')
      .click()
  
    cy.location('pathname').should('eq', '/brand_products/Polo')
  
    cy.contains('h2', 'Brand - Polo Products')
      .should('be.visible')
  
    cy.contains('.brands-name a', 'Babyhug')
      .should('be.visible')
      .click()
  
    cy.location('pathname').should('eq', '/brand_products/Babyhug')
  
    cy.contains('h2', 'Brand - Babyhug Products')
      .should('be.visible')
  
    cy.get('.features_items .product-image-wrapper')
      .should('have.length.greaterThan', 0)
      .and('be.visible')
  })
})