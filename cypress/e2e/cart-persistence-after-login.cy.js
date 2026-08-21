describe('Persistência do carrinho após o login', () => {
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

  it('Mantém os produtos no carrinho depois do login', () => {
     const produtos = [
       {
         id: 1,
         nome: 'Blue Top',
         preco: 'Rs. 500',
         quantidade: '1',
         total: 'Rs. 500'
       },
       {
         id: 5,
         nome: 'Winter Top',
         preco: 'Rs. 600',
         quantidade: '1',
         total: 'Rs. 600'
       }
     ]
   
     produtos.forEach(({ nome }, index) => {
       cy.contains('.productinfo p', nome)
         .closest('.single-products')
         .find('.productinfo .add-to-cart')
         .click()
   
       cy.contains('h4', 'Added!')
         .should('be.visible')
   
       if (index < produtos.length - 1) {
         cy.contains('button', 'Continue Shopping')
           .click()
       }
     })
   
     cy.contains('button', 'Continue Shopping')
       .click()
   
     cy.contains('a', 'Signup / Login')
       .click()
   
     cy.location('pathname')
       .should('eq', '/login')
   
     cy.get('[data-qa="login-email"]')
       .type(usuario.email)
   
     cy.get('[data-qa="login-password"]')
       .type(usuario.senha, { log: false })
   
     cy.get('[data-qa="login-button"]')
       .click()
   
     cy.contains('Logged in as')
       .parent()
       .should('contain', usuario.nome)
   
     cy.contains('a', 'Cart')
       .click()
   
     cy.location('pathname')
       .should('eq', '/view_cart')
   
     produtos.forEach((produto) => {
      cy.get(`#product-${produto.id}`)
        .should('be.visible')
        .within(() => {
        cy.get('.cart_description')
          .should('contain', produto.nome)
    
        cy.get('.cart_price')
          .should('contain', produto.preco)
    
        cy.get('.cart_quantity')
          .should('contain', produto.quantidade)
    
        cy.get('.cart_total')
          .should('contain', produto.total)
        })
      })
    })
})