export const criarUsuario = (sobrescritas = {}) => ({
  nome: 'Robson Junior',
  email: `robson${Date.now()}-${Cypress._.random(1000, 9999)}@email.com`,
  senha: 'Senha@123',
  diaNascimento: '10',
  mesNascimento: '10',
  anoNascimento: '1996',
  primeiroNome: 'Robson',
  sobrenome: 'Junior',
  empresa: 'QA Automation',
  endereco: 'Rua dos Testes, 100',
  complemento: 'Centro',
  pais: 'Canada',
  estado: 'São Paulo',
  cidade: 'São Paulo',
  cep: '01001-000',
  telefone: '11999999999',
  ...sobrescritas
})