/* 二分搜索
- 前提是有序数组
*/

function findIndex(list, value) {
  let l = 0
  let r = list.length - 1
  while (l <= r) {
    let c = ((r + l) / 2) >> 0
    const curVal = list[c]
    if (curVal > value) {
      r = c - 1
    } else if (curVal < value) {
      l = c + 1
    } else {
      return c
    }
  }
  return -1
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(findIndex(data, 7))
console.log(findIndex(data, 9))
