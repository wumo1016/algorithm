/* 归并排序
- 将数组分成两半 知道子数组中的元素小于2
- 遍历左右数组 每次将较小的头放到一个新数组中 直到两个数组为空
- 最后返回拼接的新数组
 */

function sort(list) {
  const len = list.length
  if (len < 2) return list
  const c = (len / 2) >> 0
  const [newLeft, newRight, res] = [
    sort(list.slice(0, c)),
    sort(list.slice(c, len)),
    []
  ]
  while (newLeft.length || newRight.length) {
    if (newLeft.length && newRight.length) {
      res.push(newLeft[0] < newRight[0] ? newLeft.shift() : newRight.shift())
    } else if (newLeft.length) {
      res.push(newLeft.shift())
    } else {
      res.push(newRight.shift())
    }
  }
  return res
}

const data = [3, 4, 4, 5, 3, 1, 5, 6, 4, 3, 2, 5]
console.log(sort(data))
