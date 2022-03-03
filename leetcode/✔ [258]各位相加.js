/* 各位相加(https://leetcode-cn.com/problems/add-digits/)
- 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。
*/

/**
 * @param {number} num
 * @return {number}
 */
function addDigits(num) {
  if (num < 10) return num
  return addDigits(
    String(num)
      .split('')
      .reduce((a, b) => Number(a) + Number(b), 0)
  )
}

console.log(addDigits(38)) // 2
console.log(addDigits(0)) // 0

// 循环相加
function addDigits(num) {
  while (num > 9) {
    let sum = 0
    while (num > 0) {
      sum += num % 10
      num = (num / 10) >> 0
    }
    num = sum
  }
  return num
}

// 数学
function addDigits(num) {
  return ((num - 1) % 9) + 1
}
