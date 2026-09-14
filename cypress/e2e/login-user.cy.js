import { criarUsuario } from '../fixtures/usuario'

describe('Login de usuário', () => {
  let usuario

  beforeEach(() => {
    usuario = criarUsuario()

    cy.api_criarUsuario(usuario)
    cy.visit('/login')
  })

  afterEach(() => {
    cy.api_excluirUsuario(usuario)
  })

  it('Realiza o login com um usuário cadastrado', () => {
    cy.loginUsuario(usuario)
  })

  it('Exibe uma mensagem de erro ao informar uma senha incorreta', () => {
    cy.get('[data-qa="login-email"]')
      .type(usuario.email)

    cy.get('[data-qa="login-password"]')
      .type('SenhaIncorreta@123', { log: false })

    cy.get('[data-qa="login-button"]')
      .click()

    cy.contains('p', 'Your email or password is incorrect!')
      .should('be.visible')

    cy.location('pathname')
      .should('eq', '/login')

    cy.contains('a', 'Logout')
      .should('not.exist')
  })

  it('Realiza o logout de um usuário autenticado', () => {
    cy.loginUsuario(usuario)

    cy.contains('a', 'Logout')
      .click()

    cy.location('pathname')
      .should('eq', '/login')

    cy.contains('h2', 'Login to your account')
      .should('be.visible')

    cy.contains('a', 'Logout')
      .should('not.exist')
  })
})