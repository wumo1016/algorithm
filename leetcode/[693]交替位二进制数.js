/* 交替位二进制数(https://leetcode-cn.com/problems/binary-number-with-alternating-bits/)
- 给定一个正整数，检查它的二进制表示是否总是 0、1 交替出现：换句话说，就是二进制表示中相邻两位的数字永不相同。
*/

/**
 * @param {number} n
 * @return {boolean}
 */
// 循环
function hasAlternatingBits(n) {
  const str = n.toString(2)
  const len = str.length - 1
  for (let i = 0; i < len; i++) {
    if (str[i] === str[i + 1]) return false
  }
  return true
}

console.log(hasAlternatingBits(5)) // 101 true
console.log(hasAlternatingBits(7)) // 111 false
console.log(hasAlternatingBits(11)) // 1011 false
console.log(hasAlternatingBits(1)) // 1 true

// 位运算1
function hasAlternatingBits(n) {
  let prev = ''
  while (n) {
    if (prev === (n & 1)) return false
    ;(prev = n & 1), (n >>= 1)
  }
  return true
}

// 位运算2
function hasAlternatingBits(n) {
  const a = n ^ (n >> 1)
  return (a & (a + 1)) === 0
}

// 正则
function hasAlternatingBits(n) {
  const str = n.toString(2)
  return /^(10|01)\1*$/.test(
    str.length & 1 ? `${str}${n & 1 ? '0' : '1'}` : str
  )
}

// 正则优化
function hasAlternatingBits(n) {
  return /^0?(10)*1?$/.test(n.toString(2))
}
