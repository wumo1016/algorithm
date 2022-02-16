/* 二分查找(https://leetcode-cn.com/problems/binary-search/)
- 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  
- 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1
- 你可以假设 nums 中的所有元素是不重复的
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let [left, right] = [0, nums.length - 1]
  while (left <= right) {
    const c = ((left + right) / 2) >> 0
    if (nums[c] > target) {
      right = c - 1
    } else if (nums[c] < target) {
      left = c + 1
    } else {
      return c
    }
  }
  return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9)) // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) // -1
console.log(search([5], 5)) // 0
