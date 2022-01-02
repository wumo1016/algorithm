/* 顺序搜索
- 遍历数组
- 搜索到目标就返回 索引
- 没有搜索到就返回 -1
*/

function findIndex(list, fn) {
  const len = list.length
  for (let i = 0; i < len; i++) {
    if (fn(list[i])) return i
  }
  return -1
}

const data = [3, 4, 4, 5, 3, 1, 5, 6, 4, 3, 2, 5]
console.log(findIndex(data, v => v === 5))
