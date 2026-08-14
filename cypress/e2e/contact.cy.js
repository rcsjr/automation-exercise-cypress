describe('Formulário de contato', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Envia uma mensagem de contato com arquivo', () => {
    const contato = {
      nome: 'Robson Junior',
      email: 'robson@email.com',
      assunto: 'Dúvida sobre um produto',
      mensagem: 'Gostaria de receber mais informações sobre o produto.'
    }

    cy.contains('a', 'Contact us').click()

    cy.location('pathname').should('eq', '/contact_us')
    cy.contains('h2', 'Get In Touch').should('be.visible')

    cy.get('[data-qa="name"]').type(contato.nome)
    cy.get('[data-qa="email"]').type(contato.email)
    cy.get('[data-qa="subject"]').type(contato.assunto)
    cy.get('[data-qa="message"]').type(contato.mensagem)

    cy.get('input[name="upload_file"]')
      .selectFile('cypress/fixtures/contact-upload.txt')

    cy.on('window:confirm', (mensagem) => {
      expect(mensagem).to.equal('Press OK to proceed!')

      return true
    })

    cy.get('[data-qa="submit-button"]').click()
    cy.pause()

    cy.contains(
      '.status',
      'Success! Your details have been submitted successfully.'
    ).should('be.visible')

    cy.contains('a.btn-success', 'Home').click()

    cy.location('pathname').should('eq', '/')
  })
})