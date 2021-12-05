/* 移除无效的括号(https://leetcode-cn.com/problems/minimum-remove-to-make-valid-parentheses/)
- 
*/

/**
 * @param {string} s
 * @return {string}
 */
function minRemoveToMakeValid(s) {
  let [stack, len, res] = [[], s.length, []]
  for (let i = 0; i < len; i++) {
    const val = s[i]
    const obj = { val, valid: true }
    if (val === '(') {
      obj.valid = false
      stack.push(obj)
    } else if (val === ')') {
      if (stack.length > 0) {
        const obj1 = stack.pop()
        obj.valid = true
        obj1.valid = true
      } else {
        obj.valid = false
      }
    }
    res.push(obj)
  }
  return res
    .filter(v => v.valid)
    .map(v => v.val)
    .join('')
}

console.log(minRemoveToMakeValid('lee(t(c)o)de)')) // lee(t(c)o)de
console.log(minRemoveToMakeValid('a)b(c)d')) // ab(c)d
console.log(minRemoveToMakeValid('))((')) // ''
console.log(minRemoveToMakeValid('(a(b(c)d)')) // a(b(c)d)
console.log(minRemoveToMakeValid('())()(((')) // ()()
