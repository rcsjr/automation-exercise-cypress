import { criarUsuario } from '../fixtures/usuario'
describe('Cadastro durante o checkout', () => {
  let usuario

  let usuarioCriado = false

  beforeEach(() => {
  usuarioCriado = false
  usuario = criarUsuario()

  cy.visit('/product_details/1')
  })

  afterEach(() => {
  if (!usuarioCriado) return

  cy.api_excluirUsuario(usuario)
    .then(() => {
      usuarioCriado = false
    })
})

  it('Registra um usuário ao tentar acessar o checkout', () => {
     cy.contains('button', 'Add to cart').click()
     
     cy.contains('h4', 'Added!')
       .should('be.visible')
     
     cy.contains('u', 'View Cart').click()
     
     cy.location('pathname').should('eq', '/view_cart')
     
     cy.contains('a', 'Proceed To Checkout').click()
     
     cy.contains('u', 'Register / Login')
       .should('be.visible')
       .click()
     
     cy.location('pathname').should('eq', '/login')
     
     cy.get('[data-qa="signup-name"]').type(usuario.nome)
     cy.get('[data-qa="signup-email"]').type(usuario.email)
     cy.get('[data-qa="signup-button"]').click()
     
     cy.contains('b', 'Enter Account Information')
       .should('be.visible')
     
     cy.get('#id_gender1').check()
     cy.get('[data-qa="password"]').type(usuario.senha)
     cy.get('[data-qa="days"]').select('10')
     cy.get('[data-qa="months"]').select('October')
     cy.get('[data-qa="years"]').select('1996')
     
     cy.get('[data-qa="first_name"]').type(usuario.primeiroNome)
     cy.get('[data-qa="last_name"]').type(usuario.sobrenome)
     cy.get('[data-qa="company"]').type(usuario.empresa)
     cy.get('[data-qa="address"]').type(usuario.endereco)
     cy.get('[data-qa="address2"]').type(usuario.complemento)
     cy.get('[data-qa="country"]').select(usuario.pais)
     cy.get('[data-qa="state"]').type(usuario.estado)
     cy.get('[data-qa="city"]').type(usuario.cidade)
     cy.get('[data-qa="zipcode"]').type(usuario.cep)
     cy.get('[data-qa="mobile_number"]').type(usuario.telefone)
     
     cy.get('[data-qa="create-account"]').click()
     
     cy.contains('b', 'Account Created!')
       .should('be.visible')
       .then(() => {
         usuarioCriado = true
       })
     
     cy.get('[data-qa="continue-button"]').click()
     
     cy.contains('Logged in as')
       .parent()
       .should('contain', usuario.nome)
     
     cy.contains('a', 'Cart').click()
     
     cy.location('pathname').should('eq', '/view_cart')
     
     cy.get('#product-1')
       .should('contain', 'Blue Top')
     
     cy.contains('a', 'Proceed To Checkout').click()
     
     cy.location('pathname').should('eq', '/checkout')
     
     cy.contains('h2', 'Address Details')
       .should('be.visible')
     
     cy.contains('h2', 'Review Your Order')
       .should('be.visible')
  })
}) 