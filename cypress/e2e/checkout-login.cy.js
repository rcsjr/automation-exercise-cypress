describe('Login antes do checkout', () => {
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