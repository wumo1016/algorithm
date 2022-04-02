/* 3 的幂(https://leetcode-cn.com/problems/power-of-three/)
- 给定一个整数，写一个函数来判断它是否是 3 的幂次方
- 如果是，返回 true ；否则，返回 false
- 整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3x
*/

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
  while (n > 2) {
    n = n / 3
  }
  return n === 1
}

console.log(isPowerOfThree(27)) // true
console.log(isPowerOfThree(0)) // false
console.log(isPowerOfThree(9)) // true
console.log(isPowerOfThree(45)) // false

// 判断是否为最大3的幂的约数 3 ^ 19 = 1162261467
function isPowerOfThree(n) {
  return n > 0 && 1162261467 % n === 0
}
