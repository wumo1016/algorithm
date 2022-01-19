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
// 双哈希
function isIsomorphic(s, t) {
  const [len, obj1, obj2] = [s.length, {}, {}]
  for (let i = 0; i < len; i++) {
    const [x, y] = [s[i], t[i]]
    if ((obj1[x] && obj1[x] !== y) || (obj2[y] && obj2[y] !== x)) return false
    ;[obj1[x], obj2[y]] = [y, x]
  }
  return true
}

console.log(isIsomorphic('egg', 'add')) // true
console.log(isIsomorphic('foo', 'bar')) // false
console.log(isIsomorphic('paper', 'title')) // true
console.log(isIsomorphic('badc', 'baba')) // false

// 索引1
function isIsomorphic(s, t) {
  const len = s.length
  for (let i = 0; i < len; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false
  }
  return true
}
// 索引2
function isIsomorphic(s, t) {
  const len = s.length
  for (let i = 0; i < len; i++) {
    if (s.lastIndexOf(s[i]) !== t.lastIndexOf(t[i])) return false
  }
  return true
}
// 元组
function isIsomorphic(s, t) {
  const [len, set] = [s.length, new Set()]
  for (let i = 0; i < len; i++) {
    set.add(s[i] + t[i])
  }
  return set.size === new Set(s).size && set.size === new Set(t).size
}
