/* 2 的幂(https://leetcode.cn/problems/power-of-two/)
- 给你一个整数 n，请你判断该整数是否是 2 的幂次方。
- 如果是，返回 true ；否则，返回 false 。
- 如果存在一个整数 x 使得 n == 2 ^ x ，则认为 n 是 2 的幂次方
*/

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
  if (n < 1) return false
  if (n === 1) return true
  while (Number.isInteger(n) && n > 2) {
    n = n / 2
  }
  return n === 2
}

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(16)) // true
console.log(isPowerOfTwo(3)) // false
console.log(isPowerOfTwo(4)) // true
console.log(isPowerOfTwo(5)) // false

// 二进制1
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0
}

// 二进制2
function isPowerOfTwo(n) {
  return n > 0 && (n & -n) === n
}

// 判断是否是最大数的约数即可
function isPowerOfTwo(n) {
  return n > 0 && Number.isInteger((1 << 30) / n)
}
