/* 前 K 个高频元素(https://leetcode-cn.com/problems/top-k-frequent-elements/)
- 给定整数数组nums和整数k
- 请你返回其中出现频率前k高的元素
- 你可以按任意顺序返回答案
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const maps = {}
  nums.forEach(v => {
    if (typeof maps[v] === 'undefined') maps[v] = 0
    maps[v]++
  })
  return Object.entries(maps)
    .sort((a, b) => b[1] - a[1])
    .map(v => Number(v[0]))
    .slice(0, k)
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) // [1,2]
console.log(topKFrequent([1], 1)) // [1]
