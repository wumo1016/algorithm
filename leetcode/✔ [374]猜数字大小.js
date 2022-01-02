/* 猜数字大小(https://leetcode-cn.com/problems/guess-number-higher-or-lower/)
- 
*/

/**
 * @param {number} n
 * @return {number}
 */
function guessNumber(n) {
  let [l, r] = [1, n]
  while (l <= r) {
    const c = Math.ceil((l + r) / 2)
    const res = guess(c)
    if (res === -1) {
      r = c - 1
    } else if (res === 1) {
      l = c + 1
    } else {
      return c
    }
  }
}

console.log(guessNumber(10)) // 6 => 6
