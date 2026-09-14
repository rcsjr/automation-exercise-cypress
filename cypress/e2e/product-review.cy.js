import { blueTop } from '../fixtures/produtos'
describe('Avaliação de produto', () => {
  beforeEach(() => {
    cy.visit('/products')
  })

  it('Envia uma avaliação de produto', () => {
    const avaliacao = {
      nome: 'Robson Junior',
      email: `robson${Date.now()}@email.com`,
      comentario: 'Produto avaliado durante um teste automatizado com Cypress.'
    }

    cy.contains('.productinfo p', blueTop.nome)
      .closest('.product-image-wrapper')
      .contains('a', 'View Product')
      .click()

    cy.location('pathname').should('eq', '/product_details/1')

    cy.contains('a', 'Write Your Review')
      .should('be.visible')

    cy.get('#name')
      .type(avaliacao.nome)
      .should('have.value', avaliacao.nome)

    cy.get('#email')
      .type(avaliacao.email)
      .should('have.value', avaliacao.email)

    cy.get('#review')
      .type(avaliacao.comentario)
      .should('have.value', avaliacao.comentario)

    cy.get('#button-review').click()

    cy.contains('span', 'Thank you for your review.')
      .should('be.visible')
  })
})