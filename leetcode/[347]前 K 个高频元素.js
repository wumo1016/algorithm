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
  const map = new Map()
  nums.forEach(v => {
    map.set(v, map.has(v) ? map.get(v) + 1 : 1)
  })
  return Array.from(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(v => v[0])
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) // [1,2]
console.log(topKFrequent([1], 1)) // [1]
