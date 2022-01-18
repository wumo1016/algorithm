/* 同构字符串(https://leetcode-cn.com/problems/isomorphic-strings/description/)
- 给定两个字符串 s 和 t，判断它们是否是同构的。
- 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
- 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。
- 不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  const [len, obj1, obj2] = [s.length, {}, {}]
  for (let i = 0; i < len; i++) {
    if (obj1[s[i]] && obj1[s[i]] !== t[i]) return false
    if (obj2[t[i]] && obj2[t[i]] !== s[i]) return false
    obj1[s[i]] = t[i]
    obj2[t[i]] = s[i]
  }
  return true
}

console.log(isIsomorphic('egg', 'add')) // true
console.log(isIsomorphic('foo', 'bar')) // false
console.log(isIsomorphic('paper', 'title')) // true
console.log(isIsomorphic('badc', 'baba')) // false
