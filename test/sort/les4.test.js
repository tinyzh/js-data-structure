import sort from '../../code/sort/les4'

test('sort', () => {
  expect(sort([3, 2, 1, 5, 6, 4], 2)).toBe(5)
})

test('sorts', () => {
  expect(sort([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4)
})
