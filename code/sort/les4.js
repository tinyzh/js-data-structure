// export default (arr, k) => {
//   arr.sort((a, b) => b - a)
//   return arr[k - 1]
// }

export default (arr, k) => {
  let len = arr.length - 1
  // 只需要遍历k次
  for (let i = len; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr[len - (k - 1)]
}
