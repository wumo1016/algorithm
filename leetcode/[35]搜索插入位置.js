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
  let len = nums.length
  let m = 0,
    n = len - 1
  while (m + 1 < n) {
    const c = Math.ceil((n - m) / 2)
    if (target > nums[c]) {
      m = c
    } else if (target < nums[c]) {
      n = c
    } else {
      n = c
      break
    }
    console.log(m, n, c);
  }
  if (target >= nums[m] && target <= nums[n]) return n
  if (m === 0 && target <= nums[0]) return 0
  if (n === len - 1 && target >= nums[len - 1]) return len
}

// console.log(searchInsert([1, 3, 5, 6], 2)) // 1
// console.log(searchInsert([1, 3, 5, 7], 6)) // 3
// console.log(searchInsert([1, 3, 5, 6], 7)) // 4
// console.log(searchInsert([1, 3, 5, 6], 5)) // 2
// console.log(searchInsert([1, 3, 5, 6], 0)) // 0
// console.log(searchInsert([1], 0)) // 0
console.log(searchInsert([1, 3], 1)) // 0
