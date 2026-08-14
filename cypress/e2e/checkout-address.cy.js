describe('Endereços do checkout', () => {
  const usuario = {
    nome: 'Robson Junior',
    email: `robson${Date.now()}@email.com`,
    senha: 'Senha@123',
    primeiroNome: 'Robson',
    sobrenome: 'Junior',
    empresa: 'QA Automation',
    endereco: 'Rua dos Testes, 100',
    complemento: 'Centro',
    pais: 'Canada',
    estado: 'São Paulo',
    cidade: 'São Paulo',
    cep: '01001-000',
    telefone: '11999999999'
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
        firstname: usuario.primeiroNome,
        lastname: usuario.sobrenome,
        company: usuario.empresa,
        address1: usuario.endereco,
        address2: usuario.complemento,
        country: usuario.pais,
        zipcode: usuario.cep,
        state: usuario.estado,
        city: usuario.cidade,
        mobile_number: usuario.telefone
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

  it('Exibe corretamente os endereços de entrega e cobrança', () => {
    const validarEndereco = (seletor) => {
      cy.get(seletor).within(() => {
        cy.contains(`${usuario.primeiroNome} ${usuario.sobrenome}`)
          .should('be.visible')

        cy.contains(usuario.empresa).should('be.visible')
        cy.contains(usuario.endereco).should('be.visible')
        cy.contains(usuario.complemento).should('be.visible')
        cy.contains(usuario.cidade).should('be.visible')
        cy.contains(usuario.estado).should('be.visible')
        cy.contains(usuario.cep).should('be.visible')
        cy.contains(usuario.pais).should('be.visible')
        cy.contains(usuario.telefone).should('be.visible')
      })
    }

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

    cy.contains('a', 'Proceed To Checkout').click()

    cy.location('pathname').should('eq', '/checkout')

    cy.contains('h2', 'Address Details')
      .should('be.visible')

    cy.contains('h2', 'Review Your Order')
      .should('be.visible')

    validarEndereco('#address_delivery')
    validarEndereco('#address_invoice')
  })
})