describe('Login após adicionar produtos', () => {
  let usuarioCriado = false
  let usuario

  beforeEach(() => {
    usuarioCriado = false

    usuario = {
      nome: 'Robson Junior',
      email: `robson${Date.now()}@email.com`,
      senha: 'Senha@123'
    }

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
      const resposta = typeof body === 'string'
        ? JSON.parse(body)
        : body

      expect(status).to.equal(200)
      expect(resposta.responseCode).to.equal(201)
      expect(resposta.message).to.equal('User created!')

      usuarioCriado = true
    })

    cy.visit('/products')
  })

  afterEach(() => {
    if (!usuarioCriado) return

    cy.request({
      method: 'DELETE',
      url: '/api/deleteAccount',
      form: true,
      body: {
        email: usuario.email,
        password: usuario.senha
      }
    }).then(({ status, body }) => {
      const resposta = typeof body === 'string'
        ? JSON.parse(body)
        : body

      expect(status).to.equal(200)
      expect(resposta.responseCode).to.equal(200)
      expect(resposta.message).to.equal('Account deleted!')

      usuarioCriado = false
    })
  })

  it('Realiza login depois de adicionar um produto ao carrinho', () => {
    const produto = {
      id: 1,
      nome: 'Blue Top'
    }

    cy.contains('.productinfo p', produto.nome)
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