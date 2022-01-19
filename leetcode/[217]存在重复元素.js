/* 存在重复元素(https://leetcode-cn.com/problems/contains-duplicate/)
- 给你一个整数数组 nums 
- 如果任一值在数组中出现 至少两次 ，返回 true
- 如果数组中每个元素互不相同，返回 false
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  return new Set(nums).size != nums.length
}
