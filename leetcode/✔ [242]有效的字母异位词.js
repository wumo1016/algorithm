/* 有效的字母异位词(https://leetcode-cn.com/problems/valid-anagram/)
- 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词
- 若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词
- 1 <= s.length, t.length <= 5 * 104
- s 和 t 仅包含小写字母
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
}

console.log(isAnagram('anagram', 'nagaram')) // true
console.log(isAnagram('rat', 'car')) // false

function isAnagram(s, t) {
  const len = s.length
  if (t.length !== len) return false
  const res = Array(26).fill(0)
  for (let i = 0; i < len; i++) {
    res[s[i].charCodeAt() - 97]++, res[t[i].charCodeAt() - 97]--
  }
  return res.every(v => v === 0)
}
