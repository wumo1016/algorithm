/* 分割回文串(https://leetcode.cn/problems/palindrome-partitioning/)
- 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串
- 返回 s 所有可能的分割方案
- s 仅由小写英文字母组成
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
function partition(s) {
  const [res, len] = [[], s.length]
  const isPalindrome = x => {
    let [start, end] = [0, x.length - 1]
    while (end - start > 0) {
      if (x[start++] !== x[end--]) return false
    }
    return true
  }
  const loop = (index, cur) => {
    if (index === len) res.push(cur)
    let str = ''
    for (let i = index; i < len; i++) {
      str += s[i]
      if (isPalindrome(str, index, i)) loop(i + 1, cur.concat(str))
    }
  }
  loop(0, [])
  return res
}

console.log(partition('aab')) // [["a","a","b"],["aa","b"]]
console.log(partition('a')) // [["a"]]

// 优化 对判断过的子串进行缓存
function partition(s) {
  const [res, len] = [[], s.length]
  const matrix = Array(len).fill('').map(_ => Array(len).fill(0))
  const isPalindrome = (x, l, r) => {
    let [start, end] = [0, x.length - 1]
    while (end - start > 0) {
      if (x[start++] !== x[end--]) {
        matrix[l][r] = false
        return false
      }
    }
    matrix[l][r] = true
    return true
  }
  const loop = (index, cur) => {
    if (index === len) res.push(cur)
    let str = ''
    for (let i = index; i < len; i++) {
      str += s[i]
      if (matrix[index][i] === false) continue
      if (matrix[index][i] === true || isPalindrome(str, index, i))
        loop(i + 1, cur.concat(str))
    }
  }
  loop(0, [])
  return res
}
