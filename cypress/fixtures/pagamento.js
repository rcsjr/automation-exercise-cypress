export const criarPagamento = (sobrescritas = {}) => ({
  nomeCartao: 'Robson Junior',
  numeroCartao: '4111111111111111',
  cvc: '123',
  mesExpiracao: '12',
  anoExpiracao: '2030',
  ...sobrescritas
})