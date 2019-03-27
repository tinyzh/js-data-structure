import repeatedSubstringPattern from '../../code/regexp/les1'

test('测试：abab', () => {
  expect(repeatedSubstringPattern('abab')).toBe(true)
})

test('测试：aba', () => {
  expect(repeatedSubstringPattern('aba')).toBe(false)
})

test('测试：abcabcabcabc', () => {
  expect(repeatedSubstringPattern('abcabcabcabc')).toBe(true)
})
