/* 比较含退格的字符串(https://leetcode-cn.com/problems/backspace-string-compare/)
- 给定s和t两个字符串，#代表退格操作 就是删除前面一个字符
- 如果相等，返回true 否则，返回false
- 如果对空文本输入退格字符，文本继续为空
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s, t) {
  const deal = str => {
    const [stack, len] = [[], str.length]
    for (let i = 0; i < len; i++) {
      const val = str[i]
      if (val === '#') {
        stack.pop()
      } else {
        stack.push(val)
      }
    }
    return stack.toString()
  }
  return deal(s) === deal(t)
}

console.log(backspaceCompare('ab#c', 'ad#c'))
console.log(backspaceCompare('a#c', 'ac'))
