/* 冒泡排序

 */

function sort(list) {
  const res = []
  list.forEach(v => {
    if (res.length > 0) {
      let i = 0,
        len = res.length
      while (i < len && res[i] < v) {
        i++
      }
      res.splice(i, 0, v)
    } else {
      res.push(v)
    }
  })
  return res
}

const data = [3, 4, 4, 5, 3, 21, 5, 6, 4, 3, 22, 5]
console.log(sort(data))
