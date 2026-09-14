import { produtosTop } from '../fixtures/produtos'

describe('Pesquisa e adição de produtos ao carrinho', () => {
  beforeEach(() => {
    cy.visit('/products')
  })

  it('Pesquisa produtos e adiciona dois resultados ao carrinho', () => {
    const termoPesquisa = 'Top'

    cy.get('#search_product')
      .type(termoPesquisa)
      .should('have.value', termoPesquisa)

    cy.get('#submit_search')
      .click()

    cy.contains('h2', 'Searched Products')
      .should('be.visible')

    produtosTop.forEach(({ nome }) => {
      cy.contains('.productinfo p', nome)
        .should('be.visible')
    })

    cy.contains('.productinfo p', produtosTop[0].nome)
      .closest('.single-products')
      .find('.productinfo .add-to-cart')
      .click()

    cy.contains('h4', 'Added!')
      .should('be.visible')

    cy.contains('button', 'Continue Shopping')
      .click()

    cy.contains('.productinfo p', produtosTop[1].nome)
      .closest('.single-products')
      .find('.productinfo .add-to-cart')
      .click()

    cy.contains('h4', 'Added!')
      .should('be.visible')

    cy.contains('u', 'View Cart')
      .click()

    cy.location('pathname')
      .should('eq', '/view_cart')

    produtosTop.forEach((produto) => {
      cy.get(`#product-${produto.id}`)
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