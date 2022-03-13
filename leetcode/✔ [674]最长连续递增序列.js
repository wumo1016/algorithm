/* 最长连续递增序列(https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/)
- 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function findLengthOfLCIS(nums) {
  let [len, max, cur] = [nums.length - 1, 1, 1]
  for (let i = 0; i < len; i++) {
    cur = nums[i + 1] > nums[i] ? ++cur : 1
    max = Math.max(max, cur)
  }
  return max
}

console.log(findLengthOfLCIS([1, 3, 5, 4, 7])) // 3
console.log(findLengthOfLCIS([2, 2, 2, 2, 2])) // 1
console.log(findLengthOfLCIS([1, 3, 5, 7])) // 4
