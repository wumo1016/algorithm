/* 最长和谐子序列(https://leetcode-cn.com/problems/longest-harmonious-subsequence/)
- 和谐数组是指一个数组里元素的最大值和最小值之间的差别 正好是 1
- 现在，给你一个整数数组 nums ，请你在所有可能的子序列中找到最长的和谐子序列的长度
- 数组的子序列是一个由数组派生出来的序列，它可以通过删除一些元素或不删除元素、且不改变其余元素的顺序而得到。
- 1 <= nums.length <= 2 * 104
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function findLHS(nums) {
  let [map, max] = [new Map(), 0]
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  map.forEach((num, key) => {
    if (map.has(key + 1)) max = Math.max(max, num + map.get(key + 1))
  })
  return max
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])) // 5
console.log(findLHS([1, 2, 3, 4])) // 2
console.log(findLHS([1, 1, 1, 1])) // 0
