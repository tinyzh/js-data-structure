import sort from '../../code/sort/les1'

test('sort', () => {
  expect(sort([1, 6, 34, 11, 234])).toEqual([1, 6, 11, 34, 234])
})
