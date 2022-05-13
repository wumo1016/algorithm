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
  // 先保证nums1是比较小的数组
  if (nums1.length > nums2.length) {
    ;[nums1, nums2] = [nums2, nums1]
  }

  let m = nums1.length
  let n = nums2.length
  // 在0～m中查找
  let left = 0
  let right = m

  // median1：前一部分的最大值
  // median2：后一部分的最小值
  let median1 = 0
  let median2 = 0

  while (left <= right) {
    // 前一部分包含 nums1[0 .. i-1] 和 nums2[0 .. j-1]
    // 后一部分包含 nums1[i .. m-1] 和 nums2[j .. n-1]
    const i = left + Math.floor((right - left) / 2) // 取nums1的中位数
    const j = Math.floor((m + n + 1) / 2) - i // 取nums2的中位数

    const maxLeft1 = i === 0 ? -Infinity : nums1[i - 1]
    const minRight1 = i === m ? Infinity : nums1[i]

    const maxLeft2 = j === 0 ? -Infinity : nums2[j - 1]
    const minRight2 = j === n ? Infinity : nums2[j]

    if (maxLeft1 <= minRight2) {
      median1 = Math.max(maxLeft1, maxLeft2)
      median2 = Math.min(minRight1, minRight2)
      left = i + 1
    } else {
      right = i - 1
    }
  }
  return (m + n) % 2 == 0 ? (median1 + median2) / 2 : median1
}
