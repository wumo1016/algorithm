/* 颜色分类(https://leetcode-cn.com/problems/sort-colors/description/)
- 给定一个包含红色、白色和蓝色，一共 n 个元素的数组
- 原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色
- 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色
- 1 <= nums.length <= 300
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors1(nums) {
  nums.sort()
  console.log(nums)
}

// sortColors([2, 0, 2, 1, 1, 0]) // [0,0,1,1,2,2]
// sortColors([2, 0, 1]) // [0,1,2]
// sortColors([0]) // [0]
// sortColors([1]) // [1]
// sortColors([0, 2, 1]) // [0,1,2]
sortColors([1, 2, 0, 0]) // [0,0,2,2]

// 移动元素
function sortColors(nums) {
  let [x, y, len] = [0, 0, nums.length]
  for (let i = 0; i < len; i++) {
    const value = nums[i]
    if (value === 0) {
      if (y === 0) {
        nums[i] = nums[i - 1]
        nums[x++] = value
      } else {
        nums[i] = nums[i - 1]
        nums[y++] = nums[x]
        nums[x++] = value
      }
    } else if (value === 1) {
      if (y === 0) y = x
      nums[i] = nums[y]
      nums[y] = value
      y++
    }
  }
}
// 移动元素简化版
function sortColors(nums) {
  let [x, y, len] = [0, 0, nums.length]
  for (let i = 0; i < len; i++) {
    const value = nums[i]
    if (value === 0) {
      nums[i] = nums[i - 1]
      if (y !== 0) nums[y++] = nums[x]
      nums[x++] = value
    } else if (value === 1) {
      if (y === 0) y = x
      nums[i] = nums[y]
      nums[y++] = value
    }
  }
}
