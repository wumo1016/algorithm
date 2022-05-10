/* 增减字符串匹配(https://leetcode.cn/problems/di-string-match/)
- 由范围 [0,n] 内所有整数组成的 n + 1 个整数的排列序列可以表示为长度为 n 的字符串 s ，其中:
  - 如果 perm[i] < perm[i + 1] ，那么 s[i] == 'I' 
  - 如果 perm[i] > perm[i + 1] ，那么 s[i] == 'D'
- 给定一个字符串 s ，重构排列 perm 并返回它。如果有多个有效排列perm，则返回其中 任何一个 
*/

/**
 * @param {string} s
 * @return {number[]}
 */
// 如果是D直接取当前最大的 否则取最小的
function diStringMatch(s) {
  let [left, right, res] = [0, s.length, []]
  for (const val of s) {
    res.push(val === 'D' ? right-- : left++)
  }
  return res.concat(left)
}

console.log(diStringMatch('IDID')) // [0,4,1,3,2]
console.log(diStringMatch('III')) // [0,1,2,3]
console.log(diStringMatch('DDI')) // [3,2,0,1]
