import { criarUsuario } from '../fixtures/usuario'
describe('Revisão dos produtos do pedido', () => {
  let usuario

  beforeEach(() => {
  usuario = criarUsuario()

  cy.api_criarUsuario(usuario)

  cy.session(usuario.email, () => {
    cy.visit('/login')
    cy.loginUsuario(usuario)
  })
})

  afterEach(() => {
  cy.api_excluirUsuario(usuario)
})

    it('Exibe corretamente o produto no resumo do pedido', () => {
     const produto = {
       id: 1,
       nome: 'Blue Top',
       preco: 'Rs. 500',
       quantidade: '1',
       total: 'Rs. 500'
     }
   
     cy.visit(`/product_details/${produto.id}`)
   
     cy.contains('button', 'Add to cart').click()
   
     cy.contains('h4', 'Added!')
       .should('be.visible')
   
     cy.contains('u', 'View Cart').click()
   
     cy.location('pathname').should('eq', '/view_cart')
   
     cy.contains('a', 'Proceed To Checkout').click()
   
     cy.location('pathname').should('eq', '/checkout')
   
     cy.contains('h2', 'Review Your Order')
       .should('be.visible')
   
 cy.get(`#product-${produto.id}`).within(() => {
    cy.get('.cart_description')
      .should('contain', produto.nome)

    cy.get('.cart_price')
      .should('contain', produto.preco)

    cy.get('.cart_quantity')
      .should('contain', produto.quantidade)

    cy.get('.cart_total')
      .should('contain', produto.total)
     })

  cy.contains('h4', 'Total Amount')
    .should('be.visible')
    .closest('tr')
    .within(() => {
     cy.get('.cart_total_price')
       .should('have.text', produto.total)
    })
  })
})