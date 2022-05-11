/* 寻找两个正序数组的中位数(https://leetcode.cn/problems/median-of-two-sorted-arrays/)
- 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2
- 请你找出并返回这两个正序数组的 中位数 
- 算法的时间复杂度应该为 O(log (m+n))
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  const res = [...nums1, ...nums2].sort((a, b) => a - b)
  const c = res.length / 2
  return Number.isInteger(c) ? (res[c] + res[c - 1]) / 2 : res[c >> 0]
}

console.log(findMedianSortedArrays([1, 3], [2])) // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])) // 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 保证num1是比较短的数组
  if (nums1.length > nums2.length) {
    ;[nums1, nums2] = [nums2, nums1]
  }
  const length1 = nums1.length
  const length2 = nums2.length
  let min = 0
  let max = length1
  let half = Math.floor((length1 + length2 + 1) / 2)
  while (max >= min) {
    const i = Math.floor((max + min) / 2)
    const j = half - i
    if (i > min && nums1[i - 1] > nums2[j]) {
      max = i - 1
    } else if (i < max && nums1[i] < nums2[j - 1]) {
      min = i + 1
    } else {
      let left, right
      if (i === 0) left = nums2[j - 1]
      else if (j === 0) left = nums1[i - 1]
      else left = Math.max(nums1[i - 1], nums2[j - 1])

      if (i === length1) right = nums2[j]
      else if (j === length2) right = nums1[i]
      else right = Math.min(nums1[i], nums2[j])

      return (length1 + length2) % 2 ? left : (left + right) / 2
    }
  }
  return 0
}
