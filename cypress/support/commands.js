Cypress.Commands.add('api_criarUsuario', (usuario) => {
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
      firstname: usuario.primeiroNome || 'Robson',
      lastname: usuario.sobrenome || 'Junior',
      company: usuario.empresa || 'QA Automation',
      address1: usuario.endereco || 'Rua dos Testes, 100',
      address2: usuario.complemento || 'Centro',
      country: usuario.pais || 'Canada',
      zipcode: usuario.cep || '01001-000',
      state: usuario.estado || 'São Paulo',
      city: usuario.cidade || 'São Paulo',
      mobile_number: usuario.telefone || '11999999999'
    }
  }).then(({ status, body }) => {
    const resposta = typeof body === 'string'
      ? JSON.parse(body)
      : body

    expect(status).to.equal(200)
    expect(resposta.responseCode).to.equal(201)
    expect(resposta.message).to.equal('User created!')
  })
})

Cypress.Commands.add('api_excluirUsuario', (usuario) => {
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
  })
})

Cypress.Commands.add('loginUsuario', (usuario) => {
  cy.get('[data-qa="login-email"]')
    .type(usuario.email)

  cy.get('[data-qa="login-password"]')
    .type(usuario.senha, { log: false })

  cy.get('[data-qa="login-button"]')
    .click()

  cy.contains('Logged in as')
    .parent()
    .should('contain', usuario.nome)
})