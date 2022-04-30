/* 相对名次(https://leetcode-cn.com/problems/relative-ranks/)
- n == score.length
- 1 <= n <= 104
- 0 <= score[i] <= 106
- score 中的所有值 互不相同
*/

/**
 * @param {number[]} score
 * @return {string[]}
 */
function findRelativeRanks(score) {
  const list = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
  const map = [...score]
    .sort((a, b) => b - a)
    .reduce(
      (res, cur, index) => (res.set(cur, list[index] || index + 1 + ''), res),
      new Map()
    )
  return score.map(key => map.get(key))
}

console.log(findRelativeRanks([5, 4, 3, 2, 1])) // ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
console.log(findRelativeRanks([10, 3, 8, 9, 4])) // ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
