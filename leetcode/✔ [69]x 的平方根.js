/* x 的平方根 (https://leetcode-cn.com/problems/sqrtx/)
- 给你一个非负整数 x ，计算并返回 x 的 算术平方根
- 由于返回类型是整数，结果只保留整数部分 ，小数部分将被舍去
- 不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5
*/

/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  let [left, right, temp] = [1, x, x]
  while (left <= right) {
    const [c, val] = [((left + right) / 2) >> 0, c * c]
    if (val > x) {
      right = c - 1
    } else if (val < x) {
      temp = c
      left = c + 1
    } else {
      return c
    }
  }
  return temp
}

console.log(mySqrt(3)) // 1
console.log(mySqrt(4)) // 2
console.log(mySqrt(8)) // 2
console.log(mySqrt(10)) // 3
console.log(mySqrt(16)) // 4
