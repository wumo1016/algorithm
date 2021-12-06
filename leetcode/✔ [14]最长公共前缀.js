/* 最长公共前缀(https://leetcode-cn.com/problems/longest-common-prefix/description/)
- 编写一个函数来查找字符串数组中的最长公共前缀
- 如果不存在公共前缀，返回空字符串""
- strs[i] 仅由小写英文字母组成
- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let res = strs[0]
  strs = strs.slice(1)
  let len = strs.length
  for (let i = 0; i < len; i++) {
    if (!res) return res
    for (let j = 0; j < res.length; j++) {
      if (strs[i][j] !== res[j]) {
        res = res.slice(0, j)
        break
      }
    }
  }
  return res
}

console.log(longestCommonPrefix(['fl', 'flow', 'flight'])) // fl
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])) // ''
