import { criarUsuario } from '../fixtures/usuario'
describe('Cadastro de usuário', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Inicia o cadastro com dados válidos', () => {
    const usuario = criarUsuario()

    cy.get('[data-qa="signup-name"]').type(usuario.nome)
    cy.get('[data-qa="signup-email"]').type(usuario.email)
    cy.get('[data-qa="signup-button"]').click()

    cy.contains('b', 'Enter Account Information').should('be.visible')
  })

  it('Exibe uma mensagem de erro ao tentar entrar com dados inválidos', () => {
    const credenciais = {
      email: 'usuario-inexistente@email.com',
      senha: 'senha-invalida'
    }

    cy.get('[data-qa="login-email"]').type(credenciais.email)
    cy.get('[data-qa="login-password"]').type(credenciais.senha)
    cy.get('[data-qa="login-button"]').click()

    cy.contains('p', 'Your email or password is incorrect!')
      .should('be.visible')
  })

  it('Cadastra um novo usuário com sucesso', () => {
    const usuario = {
      nome: 'Robson Junior',
      email: `robson${Date.now()}@email.com`,
      senha: 'Senha@123',
      diaNascimento: '10',
      mesNascimento: '10',
      anoNascimento: '1996',
      primeiroNome: 'Robson',
      sobrenome: 'Junior',
      empresa: 'QA Automation',
      endereco: 'Rua dos Testes, 100',
      pais: 'Canada',
      estado: 'São Paulo',
      cidade: 'São Paulo',
      cep: '01001-000',
      telefone: '11999999999'
    }

    cy.get('[data-qa="signup-name"]').type(usuario.nome)
    cy.get('[data-qa="signup-email"]').type(usuario.email)
    cy.get('[data-qa="signup-button"]').click()

    cy.contains('b', 'Enter Account Information').should('be.visible')

    cy.get('#id_gender1').check()
    cy.get('[data-qa="password"]').type(usuario.senha)
    cy.get('[data-qa="days"]').select(usuario.diaNascimento)
    cy.get('[data-qa="months"]').select(usuario.mesNascimento)
    cy.get('[data-qa="years"]').select(usuario.anoNascimento)
    cy.get('#newsletter').check()
    cy.get('#optin').check()

    cy.get('[data-qa="first_name"]').type(usuario.primeiroNome)
    cy.get('[data-qa="last_name"]').type(usuario.sobrenome)
    cy.get('[data-qa="company"]').type(usuario.empresa)
    cy.get('[data-qa="address"]').type(usuario.endereco)
    cy.get('[data-qa="country"]').select(usuario.pais)
    cy.get('[data-qa="state"]').type(usuario.estado)
    cy.get('[data-qa="city"]').type(usuario.cidade)
    cy.get('[data-qa="zipcode"]').type(usuario.cep)
    cy.get('[data-qa="mobile_number"]').type(usuario.telefone)
    cy.get('[data-qa="create-account"]').click()

    cy.contains('b', 'Account Created!').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()

    cy.contains('Logged in as')
      .parent()
      .should('contain', usuario.nome)

    cy.contains('a', 'Delete Account').click()

    cy.contains('b', 'Account Deleted!').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()

    cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
  })
})