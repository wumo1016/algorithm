/* 括号生成(https://leetcode-cn.com/problems/generate-parentheses/)
- 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合
- 1 <= n <= 5
*/

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const [list, len] = [[], (n - 1) * 2]
  const loop = (pre, lNum, rNum) => {
    if (pre.length >= len) return list.push('(' + pre + ')')
    if (lNum < n - 1) loop(pre + '(', lNum + 1, rNum)
    if (rNum < n - 1) loop(pre + ')', lNum, rNum + 1)
  }
  loop('', 0, 0)
  const isValid = str => {
    let i = 0
    for (const s of str) {
      i += s === '(' ? 1 : i > 0 ? -1 : 0
    }
    return i === 0
  }
  return list.filter(isValid)
}

console.log(generateParenthesis(3)) // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)) // ["()"]

// 只要已经添加的左边括号比右边多 就可以添加右边括号
function generateParenthesis(n) {
  const [res, len] = [[], n * 2]
  const dfs = (l, r, str) => {
    if (str.length === len) return res.push(str)
    if (l > 0) dfs(l - 1, r, str + '(')
    if (l < r) dfs(l, r - 1, str + ')')
  }
  dfs(n, n, '')
  return res
}
