export default (arr) => {
  arr.sort()
  let r = []
  let odd = 1
  let even = 0
  for (let item of arr) {
    if (item % 2 === 1) {
      r[odd] = item
      odd += 2
    } else {
      r[even] = item
      even += 2
    }
  }

  return r
}
