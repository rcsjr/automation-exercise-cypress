describe('Cadastro com e-mail existente', () => {
  const usuario = {
    nome: 'Robson Junior',
    email: `robson${Date.now()}@email.com`,
    senha: 'Senha@123'
  }

  beforeEach(() => {
  cy.api_criarUsuario(usuario)
  cy.visit('/login')
})

afterEach(() => {
  cy.api_excluirUsuario(usuario)
})

  it('Exibe uma mensagem de erro ao cadastrar um e-mail existente', () => {
  cy.get('[data-qa="signup-name"]').type(usuario.nome)
  cy.get('[data-qa="signup-email"]').type(usuario.email)
  cy.get('[data-qa="signup-button"]').click()

  cy.contains('p', 'Email Address already exist!')
    .should('be.visible')

  cy.location('pathname').should('eq', '/signup')
  cy.contains('b', 'Enter Account Information').should('not.exist')

  })
})