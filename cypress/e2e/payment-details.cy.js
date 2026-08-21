describe('Dados de pagamento', () => {
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

    cy.session(usuario.email, () => {
      cy.visit('/login')

      cy.get('[data-qa="login-email"]').type(usuario.email)
      cy.get('[data-qa="login-password"]').type(usuario.senha)
      cy.get('[data-qa="login-button"]').click()

      cy.contains('Logged in as')
        .parent()
        .should('contain', usuario.nome)
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

  it('Preenche os dados de pagamento', () => {
        const pagamento = {
          nomeCartao: 'Robson Junior',
          numeroCartao: '4111111111111111',
          cvc: '123',
          mesExpiracao: '12',
          anoExpiracao: '2030'
        }
    
        cy.visit('/product_details/1')
    
        cy.contains('button', 'Add to cart').click()
    
        cy.contains('h4', 'Added!')
          .should('be.visible')
    
        cy.contains('u', 'View Cart').click()
    
        cy.contains('a', 'Proceed To Checkout').click()
    
        cy.location('pathname').should('eq', '/checkout')
    
        cy.contains('a', 'Place Order').click()
    
        cy.location('pathname').should('eq', '/payment')
    
        cy.get('[data-qa="name-on-card"]')
          .type(pagamento.nomeCartao)
          .should('have.value', pagamento.nomeCartao)
    
        cy.get('[data-qa="card-number"]')
          .type(pagamento.numeroCartao)
          .should('have.value', pagamento.numeroCartao)
    
        cy.get('[data-qa="cvc"]')
          .type(pagamento.cvc)
          .should('have.value', pagamento.cvc)
    
        cy.get('[data-qa="expiry-month"]')
          .type(pagamento.mesExpiracao)
          .should('have.value', pagamento.mesExpiracao)
    
        cy.get('[data-qa="expiry-year"]')
          .type(pagamento.anoExpiracao)
          .should('have.value', pagamento.anoExpiracao)
    
        cy.get('[data-qa="pay-button"]')
          .should('be.visible')
          .and('be.enabled')
   })
})