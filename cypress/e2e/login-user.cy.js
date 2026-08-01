describe('Login de usuário', () => {
  const usuario = {
    nome: 'Robson Junior',
    email: `robson${Date.now()}@email.com`,
    senha: 'Senha@123'
  }

  beforeEach(() => {
    cy.request({
      method: 'POST',
      url: '/api/createAccount',
      form: true,
      body: {
        name: usuario.nome,
        email: usuario.email,
        password: usuario.senha,
        title: 'Mr',
        birth_date: '10',
        birth_month: '10',
        birth_year: '1996',
        firstname: 'Robson',
        lastname: 'Junior',
        company: 'QA Automation',
        address1: 'Rua dos Testes, 100',
        address2: 'Centro',
        country: 'Canada',
        zipcode: '01001-000',
        state: 'São Paulo',
        city: 'São Paulo',
        mobile_number: '11999999999'
      }
    }).then(({ status, body }) => {
      const resposta = JSON.parse(body)

      expect(status).to.equal(200)
      expect(resposta.responseCode).to.equal(201)
      expect(resposta.message).to.equal('User created!')
    })

    cy.visit('/login')
  })

  afterEach(() => {
    cy.request({
      method: 'DELETE',
      url: '/api/deleteAccount',
      form: true,
      body: {
        email: usuario.email,
        password: usuario.senha
      }
    }).then(({ status, body }) => {
      const resposta = JSON.parse(body)

      expect(status).to.equal(200)
      expect(resposta.responseCode).to.equal(200)
      expect(resposta.message).to.equal('Account deleted!')
    })
  })

  it('Realiza o login com um usuário cadastrado', () => {
    cy.get('[data-qa="login-email"]').type(usuario.email)
    cy.get('[data-qa="login-password"]').type(usuario.senha)
    cy.get('[data-qa="login-button"]').click()

    cy.contains('Logged in as')
      .parent()
      .should('contain', usuario.nome)
  })

  it('Exibe uma mensagem de erro ao informar uma senha incorreta', () => {
  cy.get('[data-qa="login-email"]').type(usuario.email)
  cy.get('[data-qa="login-password"]').type('SenhaIncorreta@123')
  cy.get('[data-qa="login-button"]').click()

  cy.contains('p', 'Your email or password is incorrect!')
    .should('be.visible')

  cy.url().should('include', '/login')
  cy.contains('a', 'Logout').should('not.exist')
  })
})