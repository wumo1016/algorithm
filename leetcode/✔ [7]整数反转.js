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
  return x < -max || x > max ? 0 : x
}

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse1(-123))

// ~ 按位非
function reverse1(x) {
  let [res, max] = [0, Math.pow(2, 31)]
  while (x) {
    res = res * 10 + (x % 10)
    if (res > max - 1 || res < max) return 0
    x = ~~(x / 10) // 一次取反 去除小数位 两次取反返回整数位
  }
  return res
}
// 位运算 如果超过32位 位运算后不等于自己(会去除多余的位)
function reverse2(x) {
  let result = 0
  while (x !== 0) {
    result = result * 10 + (x % 10)
    x = (x / 10) | 0
  }
  return (result | 0) === result ? result : 0
}
