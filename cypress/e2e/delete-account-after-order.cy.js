import { criarUsuario } from '../fixtures/usuario'
import { criarPagamento } from '../fixtures/pagamento'
describe('Exclusão da conta após o pedido', () => {
  let usuarioCriado = false
  let usuario

  beforeEach(() => {
  usuarioCriado = false
  usuario = criarUsuario() 
  
  cy.api_criarUsuario(usuario)
    .then(() => {
      usuarioCriado = true
    })

  cy.session(usuario.email, () => {
    cy.visit('/login')
    cy.loginUsuario(usuario)
  })
})

  afterEach(() => {
  if (!usuarioCriado) return

  cy.api_excluirUsuario(usuario)
    .then(() => {
      usuarioCriado = false
    })
})

  it('Confirma um pedido e exclui a conta após a compra', () => {
    const pagamento = criarPagamento()

    cy.visit('/product_details/1')

    cy.contains('button', 'Add to cart')
      .click()

    cy.contains('h4', 'Added!')
      .should('be.visible')

    cy.contains('u', 'View Cart')
      .click()

    cy.contains('a', 'Proceed To Checkout')
      .click()

    cy.location('pathname')
      .should('eq', '/checkout')

    cy.contains('a', 'Place Order')
      .click()

    cy.location('pathname')
      .should('eq', '/payment')

    cy.get('[data-qa="name-on-card"]')
      .type(pagamento.nomeCartao)

    cy.get('[data-qa="card-number"]')
      .type(pagamento.numeroCartao)

    cy.get('[data-qa="cvc"]')
      .type(pagamento.cvc)

    cy.get('[data-qa="expiry-month"]')
      .type(pagamento.mesExpiracao)

    cy.get('[data-qa="expiry-year"]')
      .type(pagamento.anoExpiracao)

    cy.intercept('POST', '**/payment')
      .as('confirmarPagamento')

    cy.get('[data-qa="pay-button"]')
      .should('be.visible')
      .and('be.enabled')
      .click()

    cy.wait('@confirmarPagamento')
      .its('response.statusCode')
      .should('eq', 302)

    cy.location('pathname')
      .should('match', /^\/payment_done\/\d+$/)

    cy.contains('b', 'Order Placed!')
      .should('be.visible')

    cy.contains(
      'p',
      'Congratulations! Your order has been confirmed!'
    ).should('be.visible')

    cy.get('[data-qa="continue-button"]')
      .should('be.visible')
      .click()

    cy.location('pathname')
      .should('eq', '/')

    cy.contains('a', 'Delete Account')
      .should('be.visible')
      .click()

    cy.location('pathname')
      .should('eq', '/delete_account')

    cy.contains('b', 'Account Deleted!')
      .should('be.visible')
      .then(() => {
    usuarioCriado = false
    })

    cy.get('[data-qa="continue-button"]')
      .should('be.visible')
      .click()

    cy.location('pathname')
      .should('eq', '/')
  })
})