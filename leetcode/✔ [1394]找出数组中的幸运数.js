/* 找出数组中的幸运数(https://leetcode-cn.com/problems/find-lucky-integer-in-an-array/)
- 在整数数组中，如果一个整数的出现频次和它的数值大小相等，我们就称这个整数为「幸运数」。
- =给你一个整数数组 arr，请你从中找出并返回一个幸运数。
- 如果数组中存在多个幸运数，只需返回 最大 的那个。
- 如果数组中不含幸运数，则返回 -1 。
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
function findLucky(arr) {
  const map = new Map()
  for (const val of arr) {
    map.set(val, map.has(val) ? map.get(val) + 1 : 1)
  }
  let res = -1
  map.forEach((val, key) => {
    if (key === val && key > res) res = key
  })
  return res
}

console.log(findLucky([2, 2, 3, 4])) // 2
console.log(findLucky([1, 2, 2, 3, 3, 3])) // 3
console.log(findLucky([2, 2, 2, 3, 3])) // -1
console.log(findLucky([5])) // -1
console.log(findLucky([7, 7, 7, 7, 7, 7, 7])) // 7
