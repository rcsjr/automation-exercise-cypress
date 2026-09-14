describe('Comentário do pedido', () => {
  const usuario = {
    nome: 'Robson Junior',
    email: `robson${Date.now()}@email.com`,
    senha: 'Senha@123'
  }

  beforeEach(() => {
  cy.api_criarUsuario(usuario)

  cy.session(usuario.email, () => {
    cy.visit('/login')
    cy.loginUsuario(usuario)
  })
})

  afterEach(() => {
  cy.api_excluirUsuario(usuario)
})

  it('Preenche o comentário do pedido no checkout', () => {
    const comentario = 'Por favor, entregar o pedido no período da tarde.'

    cy.visit('/product_details/1')

    cy.contains('button', 'Add to cart').click()

    cy.contains('h4', 'Added!')
      .should('be.visible')

    cy.contains('u', 'View Cart').click()

    cy.location('pathname').should('eq', '/view_cart')

    cy.contains('a', 'Proceed To Checkout').click()

    cy.location('pathname').should('eq', '/checkout')

    cy.get('textarea[name="message"]')
      .should('be.visible')
      .type(comentario)
      .should('have.value', comentario)
  })
})