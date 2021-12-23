/* 两个数组的交集(https://leetcode-cn.com/problems/intersection-of-two-arrays/)
- 给定两个数组，编写一个函数来计算它们的交集
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  return [...new Set(nums1)].filter(v => nums2.includes(v))
}

console.log(intersection([1, 2, 2, 1], [2, 2])) // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])) //[9,4]
