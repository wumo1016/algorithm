/* 删列造序(https://leetcode.cn/problems/delete-columns-to-make-sorted/)
- n == strs.length
- 1 <= n <= 100
- 1 <= strs[i].length <= 1000
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
function minDeletionSize(strs) {
  const [m, n] = [strs.length, strs[0].length]
  if (m === 1) return 0
  let res = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m - 1; j++) {
      if (strs[j + 1][i] < strs[j][i]) {
        res++
        break
      }
    }
  }
  return res
}

console.log(minDeletionSize(['cba', 'daf', 'ghi'])) // 1
console.log(minDeletionSize(['a', 'b'])) // 0
console.log(minDeletionSize(['zyx', 'wvu', 'tsr'])) // 3
