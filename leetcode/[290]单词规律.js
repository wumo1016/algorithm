/* 单词规律(https://leetcode-cn.com/problems/word-pattern/)
- 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律
- 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern, s) {
  const [l1, l2, map1, map2] = [pattern.split(''), s.split(' '), {}, {}]
  if (l1.length !== l2.length) return false
  for (let i = 0, len = l1.length; i < len; i++) {
    const [key1, key2] = [l1[i], l2[i]]
    if (map1[key1] && map2[key2]) {
      if (map1[key1] !== l2[i] || map2[key2] !== l1[i]) return false
    } else if (map1[key1]) {
      if (map1[key1] !== l2[i]) return false
      map2[key2] = l1[i]
    } else if (map2[key2]) {
      if (map2[key2] !== l1[i]) return false
      map1[key1] = l2[i]
    } else {
      map1[key1] = l2[i]
      map2[key2] = l1[i]
    }
  }
  return true
}

console.log(wordPattern('abba', 'dog cat cat dog')) // true
console.log(wordPattern('abba', 'dog cat cat fish')) // false
console.log(wordPattern('aaaa', 'dog cat cat dog')) // false

function wordPattern(pattern, s) {
  const [l1, l2, map1, map2] = [pattern.split(''), s.split(' '), {}, {}]
  if (l1.length !== l2.length) return false
  for (let i = 0, len = l1.length; i < len; i++) {
    const [key1, key2] = [l1[i], l2[i]]
    if (
      (map1[key1] && map1[key1] !== l2[i]) ||
      (map2[key2] && map2[key2] !== l1[i])
    )
      return false
    map1[key1] = l2[i]
    map2[key2] = l1[i]
  }
  return true
}
