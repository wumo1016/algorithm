/* 七进制数(https://leetcode-cn.com/problems/base-7/)
- 给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。
*/

/**
 * @param {number} num
 * @return {string}
 */
function convertToBase7(num) {
  let [res, tag] = ['', '']
  if (num < 0) {
    num = Math.abs(num)
    tag = '-'
  }
  do {
    res = (num % 7) + res
    num = (num / 7) >> 0
  } while (num > 0)
  return tag + res
}

console.log(convertToBase7(100)) // 202
console.log(convertToBase7(-7)) // -10
console.log(convertToBase7(0)) // 0
