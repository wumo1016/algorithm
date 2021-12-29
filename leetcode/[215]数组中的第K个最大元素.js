/* 数组中的第K个最大元素(https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)
- 给定整数数组nums和整数k
- 请返回数组中第k大的元素 第1个最大，以此类推
- 你需要找的是数组排序后的第k个最大的元素，而不是第 k 个不同的元素
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  return nums.sort((a, b) => b - a)[k - 1]
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)) // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 4], 4)) // 4

function findKthLargest(nums, k) {
  return nums.sort((a, b) => b - a)[k - 1]
}
