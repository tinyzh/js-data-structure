import flower from '../../code/array/les3'

test('flower:[1,0,0,0,1],1', () => {
  expect(flower([1, 0, 0, 0, 1], 1)).toBe(true)
})

test('flower:[1,0,0,0,1],2', () => {
  expect(flower([1, 0, 0, 0, 1], 2)).toBe(false)
})
