import telComb from '../../code/array/les1'

test('telcomb:23', () => {
  expect(telComb('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})
