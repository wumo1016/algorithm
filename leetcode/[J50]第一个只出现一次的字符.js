/* 第一个只出现一次的字符(https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/)
- 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
*/

/**
 * @param {string} s
 * @return {character}
 */
function firstUniqChar(s) {
  const len = s.length
  if (len === 1) return s
  const set = new Set()
  for (let i = 0; i < len; i++) {
    if (set.has(s[i])) continue
    if (s.lastIndexOf(s[i]) === i) return s[i]
    set.add(s[i])
  }
  return ' '
}

console.log(firstUniqChar('abaccdeff')) // 'b'
console.log(firstUniqChar('')) // ' '
console.log(firstUniqChar('cc')) // ' '

// 利用数组
function firstUniqChar(s) {
  const res = Array(26).fill(0)
  for (const val of s) {
    res[val.charCodeAt() - 97]++
  }
  for (const val of s) {
    if (res[val.charCodeAt() - 97] === 1) return val
  }
  return ' '
}

// 巧用api
function firstUniqChar(s) {
  for (const x of s) {
    if (s.indexOf(x) === s.lastIndexOf(x)) return x
  }
  return ' '
}

// 使用正则
function firstUniqChar(s) {
  for (const x of new Set(s)) {
    if (s.match(new RegExp(x, 'g')).length === 1) return x
  }
  return ' '
}
