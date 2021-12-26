/* 有效数字(https://leetcode-cn.com/problems/valid-number/)
- 给你一个字符串 s ，如果 s 是一个 有效数字 ，请返回 true
- 对于全部
  - 前面有一个可选 +/-
  - 对于整数 => (\+|\-)?
    - 至少一位数字 + ((e|E|e+|e-|E+|E—) + 至少一位数字)可选 => \d+(((e|E)(\+|\-)?)?\d+)?
  - 对于小数
    - 至少一位数字 + . => \d+\.
    - 至少一位数字 + . + 数字0/多个 + (e|E|e+|e-|E+|E—)可选 + 至少一位数字 => \d+\.\d*((e|E)(\+|\-)?)?\d+
    - . + 数字至少一个 + ((e|E|e+|e-|E+|E—)可选 + 至少一位数字)可选 => \.\d+(((e|E)(\+|\-)?)?\d+)?
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function isNumber(s) {
  return (
    /^(\+|\-)?\d+(((e|E)(\+|\-)?)?\d+)?$/.test(s) || /^(\+|\-)?\d+\.$/.test(s) || 
    /^(\+|\-)?\d+\.\d*((e|E)(\+|\-)?)?\d+$/.test(s) || 
    /^(\+|\-)?\.\d+(((e|E)(\+|\-)?)?\d+)?$/.test(s)
  )
}

const data1 = [
  '2',
  '0089',
  '-0.1',

  '+3.14',
  '4.',
  '-.9',

  '2e10',
  '-90E3',
  '3e+7',

  '+6e-1',
  '53.5e93',
  '-123.456e789'
]

const data2 = ['abc', '1a', '1e', 'e3', '99e2.5', '--6', '-+3', '95a54e53']

console.log(data1.map(v => isNumber(v)))
console.log(data2.map(v => isNumber(v)))
console.log(isNumber('.'))
