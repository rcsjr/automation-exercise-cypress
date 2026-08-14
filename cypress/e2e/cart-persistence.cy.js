describe('Persistência dos produtos no carrinho', () => {
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

  it('Mantém o produto no carrinho após realizar o login', () => {
    const nomeProduto = 'Blue Top'

    cy.visit('/products')

    cy.get('#search_product').type(nomeProduto)
    cy.get('#submit_search').click()

    cy.contains('h2', 'Searched Products')
      .should('be.visible')

    cy.contains('.productinfo p', nomeProduto)
      .should('be.visible')

    cy.get('a.add-to-cart[data-product-id="1"]')
      .first()
      .click()

    cy.contains('h4', 'Added!')
      .should('be.visible')

    cy.contains('u', 'View Cart').click()

    cy.get('#product-1').within(() => {
      cy.contains('a', nomeProduto).should('be.visible')
    })

    cy.contains('a', 'Signup / Login').click()

    cy.get('[data-qa="login-email"]').type(usuario.email)
    cy.get('[data-qa="login-password"]').type(usuario.senha)
    cy.get('[data-qa="login-button"]').click()

    cy.contains('Logged in as')
      .parent()
      .should('contain', usuario.nome)

    cy.contains('a', 'Cart').click()

    cy.location('pathname').should('eq', '/view_cart')

    cy.get('#product-1').within(() => {
      cy.contains('a', nomeProduto).should('be.visible')
      cy.get('.cart_quantity button').should('have.text', '1')
    })
  })
})