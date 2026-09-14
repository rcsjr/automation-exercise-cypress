import { criarUsuario } from '../fixtures/usuario'
import { blueTop } from '../fixtures/produtos'
describe('Login após adicionar produtos', () => {
  let usuarioCriado = false
  let usuario

  beforeEach(() => {
    usuarioCriado = false
    usuario = criarUsuario()

    cy.api_criarUsuario(usuario)
      .then(() => {
    usuarioCriado = true
  })

    cy.visit('/products')
  })

  afterEach(() => {
  if (!usuarioCriado) return

  cy.api_excluirUsuario(usuario)
    .then(() => {
      usuarioCriado = false
    })
})

  it('Realiza login depois de adicionar um produto ao carrinho', () => {
    cy.contains('.productinfo p', blueTop.nome)
      .closest('.single-products')
      .find('.productinfo .add-to-cart')
      .click()

    cy.contains('h4', 'Added!')
      .should('be.visible')

    cy.contains('button', 'Continue Shopping')
      .click()

    cy.contains('a', 'Signup / Login')
      .click()

    cy.location('pathname')
      .should('eq', '/login')

    cy.contains('h2', 'Login to your account')
      .should('be.visible')

    cy.get('[data-qa="login-email"]')
      .type(usuario.email)

    cy.get('[data-qa="login-password"]')
      .type(usuario.senha, { log: false })

    cy.get('[data-qa="login-button"]')
      .click()

    cy.contains('Logged in as')
      .parent()
      .should('contain', usuario.nome)

    cy.contains('a', 'Logout')
      .should('be.visible')
  })
})