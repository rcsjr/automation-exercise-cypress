import { criarUsuario } from '../fixtures/usuario'
import { produtosTop } from '../fixtures/produtos'

describe('Persistência do carrinho após o login', () => {
  let usuarioCriado = false
  let usuario

  beforeEach(() => {
    usuarioCriado = false
    usuario = criarUsuario()

    cy.api_criarUsuario(usuario)
      .then(() => {
        usuarioCriado = true
      })

    cy.visit('/products')
  })

  afterEach(() => {
    if (!usuarioCriado) return

    cy.api_excluirUsuario(usuario)
      .then(() => {
        usuarioCriado = false
      })
  })

  it('Mantém os produtos no carrinho depois do login', () => {
    produtosTop.forEach(({ nome }, index) => {
      cy.contains('.productinfo p', nome)
        .closest('.single-products')
        .find('.productinfo .add-to-cart')
        .click()

      cy.contains('h4', 'Added!')
        .should('be.visible')

      if (index < produtosTop.length - 1) {
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

    cy.loginUsuario(usuario)

    cy.contains('a', 'Cart')
      .click()

    cy.location('pathname')
      .should('eq', '/view_cart')

    produtosTop.forEach((produto) => {
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