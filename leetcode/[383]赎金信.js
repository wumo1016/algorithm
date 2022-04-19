/* 赎金信(https://leetcode-cn.com/problems/ransom-note/)
- 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成
- 如果可以，返回 true ；否则返回 false 。
- magazine 中的每个字符只能在 ransomNote 中使用一次。
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  const res = ransomNote
    .split('')
    .reduce((o, key) => (o[key] ? o[key]++ : (o[key] = 1), o), {})
  let len = Object.keys(res).length
  for (const s of magazine) {
    if (!res[s]) continue
    res[s] && res[s]--
    if (res[s] === 0) len--
    if (len === 0) return true
  }
  return false
}

console.log(canConstruct('a', 'b')) // false
console.log(canConstruct('aa', 'ab')) // false
console.log(canConstruct('aa', 'aab')) // true
console.log(canConstruct('fihjjjjei', 'hjibagacbhadfaefdjaeaebgi')) // false

function canConstruct(ransomNote, magazine) {
  const res = ransomNote
    .split('')
    .reduce((o, key) => (o[key] ? o[key]++ : (o[key] = 1), o), {})
  let len = Object.keys(res).length
  for (const s of magazine) {
    if (!res[s]) continue
    res[s] && res[s]--
    if (res[s] === 0) len--
    if (len === 0) return true
  }
  return false
}