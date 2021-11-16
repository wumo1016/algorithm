/* 有效的括号
- 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
- 左括号必须用相同类型的右括号闭合
- 左括号必须以正确的顺序闭合
*/

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const list = [],
    len = s.length,
    map = {
      ')': '(',
      '}': '{',
      ']': '['
    }
  if (len % 2 === 1) return false
  for (let i = 0; i < len; i++) {
    const v = s[i]
    if (!map[v]) {
      list.push(v)
    } else if (list.pop() !== map[v]) {
      return false
    }
  }
  return list.length === 0
}

const data = '({})[[]]((({}))){{[[]]()()}}'

console.log(isValid(data))
