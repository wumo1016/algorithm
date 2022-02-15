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
function sortArray(nums) {}

// 插入排序
function sortArray(nums) {}

// 快速排序(内存溢出)
function sortArray(nums) {}

// 归并排序
function sortArray(nums) {}

// 选择排序
function sortArray(nums) {}
