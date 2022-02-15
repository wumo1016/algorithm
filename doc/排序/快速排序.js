/* 快速排序
- 选取任意一个基准数
- 将所有比基准小的放在前面 比基准大的放在后面
- 递归操作 直到数组中少于2个元素
- 最后合并左右数组
 */

function sort(list) {}

const data = [3, 4, 4, 5, 3, 1, 5, 6, 4, 3, 2, 5]
console.log(sort(data))

function sort1(list) {
  const len = list.length
  if (len < 2) return list
  const [left, center, right] = [[], [], []]
  const val = list[0]
  for (let i = 0; i < len; i++) {
    const cur = list[i]
    if (cur > val) {
      right.push(cur)
    } else if (cur < val) {
      left.push(cur)
    } else {
      center.push(cur)
    }
  }
  return sort(left).concat(center, sort(right))
}
