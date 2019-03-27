export default (arr) => {
  arr.sort((a, b) => a - b)
  let min = Number.MAX_SAFE_INTEGER
  let end
  let tmp = []
  let res = true
  while (arr.length) {
    end = arr.lastIndexOf(arr[0])
    tmp.push(arr.splice(0, end + 1))
    if (min > end + 1) {
      min = end + 1
    }
  }
  tmp.every(item => {
    if (item.length % min !== 0) {
      res = false
      return false
    }
  })

  return res
}
