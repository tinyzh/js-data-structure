export default (arr) => {
  // 选择排序
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        let c = min
        min = arr[j]
        arr[j] = c
      }
    }
    arr[i] = min
  }
  return arr
}
