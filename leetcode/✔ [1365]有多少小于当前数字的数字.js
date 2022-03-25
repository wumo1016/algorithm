/* 有多少小于当前数字的数字(https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number/)
- 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目
- 换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。
- 以数组形式返回答案
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) {
  const [list, map, len] = [
    [...nums].sort((a, b) => a - b),
    new Map(),
    nums.length
  ]
  for (let i = 0; i < len; i++) {
    if (!map.has(list[i])) map.set(list[i], i)
  }
  return nums.map(v => map.get(v))
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])) // [4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])) // [2,1,0,3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])) // [0,0,0,0]
