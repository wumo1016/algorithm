/* 颠倒二进制位(https://leetcode-cn.com/problems/reverse-bits/)
- 颠倒给定的 32 位无符号整数的二进制位
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
  let res = 0
  for (let i = 0; i < 32; i++) {
    if (n & 1) res += Math.abs(1 << (31 - i))
    n >>= 1
  }
  return res
}

console.log(reverseBits(43261596)) // 964176192
console.log(reverseBits(4294967293)) // 3221225471
