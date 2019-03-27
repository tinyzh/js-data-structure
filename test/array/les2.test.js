import card from '../../code/array/les2'

test('card:[1,2,3,4,4,3,2,1]', () => {
  expect(card([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true)
})

test('card:[1,1,2,2,2,2]', () => {
  expect(card([1, 1, 2, 2, 2, 2])).toBe(true)
})

// test('card:[0, 0, 0, 0, 0, 1, 1, 2, 3, 4]', () => {
//   expect(card([0, 0, 0, 0, 0, 1, 1, 2, 3, 4])).toBe(false)
// })
