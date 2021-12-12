/* 搜索插入位置(https://leetcode-cn.com/problems/search-insert-position/)
- 给定一个排序数组和一个目标值，在数组中找到目标值(按顺序插入的目标索引)，并返回其索引
- 如果目标值不存在于数组中，返回它将会被按顺序插入的位置
- 请必须使用时间复杂度为 O(log n) 的算法
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  const len = nums.length
  let [left, right, res] = [0, len - 1, len]
  while (left <= right) {
    console.log(left, right);
    const mid = Math.floor((right - left) / 2) + left // ((right - left) >> 1) + left
    if (target <= nums[mid]) {
      res = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return res
}

console.log(searchInsert([1, 3, 5, 6], 2)) // 1
// console.log(searchInsert([1, 3, 5, 7], 6)) // 3
// console.log(searchInsert([1, 3, 5, 6], 7)) // 4
// console.log(searchInsert([1, 3, 5, 6], 5)) // 2
// console.log(searchInsert([1, 3, 5, 6], 0)) // 0
// console.log(searchInsert([1], 0)) // 0
// console.log(searchInsert([1, 3], 1)) // 0
