export default (flowerbed, n) => {
  if (n === 0) return true
  let num = 0
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      num++
      i += 1
    }
  }
  return num >= n
}
