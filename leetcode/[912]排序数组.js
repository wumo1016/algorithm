/* 排序数组(https://leetcode-cn.com/problems/sort-an-array/)
- 给你一个整数数组 nums，请你将该数组升序排列
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
  return nums.sort((a, b) => a - b)
}

console.log(sortArray([5, 2, 3, 1])) // [1,2,3,5]
console.log(sortArray([5, 1, 1, 2, 0, 0])) // [0,0,1,1,2,5]

// 冒泡排序
function sortArray(nums) {
  const len = nums.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
  return nums
}
