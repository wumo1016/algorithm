/* 整数反转(https://leetcode-cn.com/problems/reverse-integer/description/)
- 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果
- 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0
- -231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x, pos = x < 0 ? '-' : '') {
  x = Number(pos + String(Math.abs(x)).split('').reverse().join(''))
  const max = Math.pow(2, 31)
  if (x < -max || x > max) return 0
  return x
}

console.log(reverse(123))
console.log(reverse(-123))
