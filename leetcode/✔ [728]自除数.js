/* 自除数(https://leetcode-cn.com/problems/self-dividing-numbers/)
- 自除数 是指可以被它包含的每一位数整除的数
- 自除数 不允许包含 0
- 给定两个整数 left 和 right ，返回一个列表，列表的元素是范围 [left, right] 内所有的 自除数 
*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function selfDividingNumbers(left, right) {
  const res = []
  loop: for (let i = left; i <= right; i++) {
    let [cur, tag] = [i, 0]
    while (cur) {
      ;[tag, cur] = [cur % 10, (cur / 10) >> 0]
      if (tag === 0 || i % tag !== 0) continue loop
    }
    res.push(i)
  }
  return res
}

console.log(selfDividingNumbers(1, 22)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
console.log(selfDividingNumbers(47, 85)) // [48,55,66,77]
