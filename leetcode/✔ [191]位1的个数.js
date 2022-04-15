/* 位1的个数(https://leetcode-cn.com/problems/number-of-1-bits/)
- 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为汉明重量）。
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
  let num = 0
  for (let i = 0; i < 32; i++) {
    if (n & (1 << i)) num++
  }
  return num
}

// 利用 n & (n - 1)
function hammingWeight(n) {
  let num = 0
  while (n) {
    n &= n - 1
    num++
  }
  return num
}
