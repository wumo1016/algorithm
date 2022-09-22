/* 能否连接形成数组(https://leetcode.cn/problems/check-array-formation-through-concatenation/)
- 
*/

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
function canFormArray(arr, pieces) {
  let res = true
  const map = new Map()
  arr.map((v, i) => map.set(v, i))
  test: for (const list of pieces) {
    let prev
    for (let i = 0, len = list.length; i < len; i++) {
      const index = map.get(list[i]) ?? -1
      if (index < 0 || (i > 0 && index !== prev + 1)) {
        res = false
        break test
      }
      prev = index
    }
  }
  return res
}

console.log(canFormArray([15, 88], [[88], [15]])) // true
console.log(canFormArray([49, 18, 16], [[16, 18, 49]])) // false
console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]])) // true
console.log(canFormArray([12], [[1]])) // true
