import { criarUsuario } from '../fixtures/usuario'
describe('Login antes do checkout', () => {
  let usuario

  beforeEach(() => {
  usuario = criarUsuario()
  cy.api_criarUsuario(usuario)
})

  afterEach(() => {
  cy.api_excluirUsuario(usuario)
})

  it('Realiza o login antes de acessar o checkout', () => {
    cy.visit('/login')

    cy.get('[data-qa="login-email"]').type(usuario.email)
    cy.get('[data-qa="login-password"]').type(usuario.senha)
    cy.get('[data-qa="login-button"]').click()

    cy.contains('Logged in as')
      .parent()
      .should('contain', usuario.nome)

    cy.visit('/product_details/1')

    cy.contains('button', 'Add to cart').click()

    cy.contains('h4', 'Added!')
      .should('be.visible')

    cy.contains('u', 'View Cart').click()

    cy.location('pathname').should('eq', '/view_cart')

    cy.contains('a', 'Proceed To Checkout').click()

    cy.location('pathname').should('eq', '/checkout')

    cy.contains('h2', 'Address Details')
      .should('be.visible')

    cy.contains('h2', 'Review Your Order')
      .should('be.visible')

    cy.contains('Logged in as')
      .parent()
      .should('contain', usuario.nome)
  })
})