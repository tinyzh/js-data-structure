export default (s) => {
  if (s.length > 12) return []
  let r = []
  let search = (cur, sub) => {
    if (cur.length === 4 && cur.join('') === s) {
      // 边界   如果元素是0开头 则当前元素只能是0  01,00非法 0合法
      let filt = cur.every(item => {
        if (item.length !== 1 && Number(item[0]) === 0) return false
        return true
      })
      filt && r.push(cur.join('.'))
    } else {
      for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
        tmp = sub.substr(0, i + 1)
        if (tmp < 256) {
          search(cur.concat([tmp]), sub.substr(i + 1))
        }
      }
    }
  }
  search([], s)
  return r
}
