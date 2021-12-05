/* 基本计算器 II(https://leetcode-cn.com/problems/basic-calculator-ii/)
- 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值
- 整数除法仅保留整数部分
- s 由整数和算符 ('+', '-', '*', '/') 组成，中间由一些空格隔开
- 表达式中的所有整数都是非负整数，且在范围 [0, 231 - 1] 内
*/

/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
  s = s.replace(/\s/g, '')
  while (s.includes('/') || s.includes('*')) {
    s = s.replace(/(\d+)(\/|\*)(\d+)/, (_, p1, p2, p3) => {
      return p2 === '*' ? p1 * p3 : Math.floor(p1 / p3)
    })
  }
  return eval(s)
}

console.log(calculate('3+2*2')) // 7
console.log(calculate(' 3/2 ')) // 1
console.log(calculate(' 3+5 / 2 ')) // 5
console.log(calculate('100000000/1/2/3/4/5/6/7/8/9/10')) // 27
console.log(calculate('1+2*5/3+6/4*2')) // 6
