/* 查找和最小的K对数字(https://leetcode-cn.com/problems/find-k-pairs-with-smallest-sums/)
- 给定两个以升序排列的整数数组 nums1 和 nums2 , 以及一个整数 k
- 定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2
- 请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk)
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
function kSmallestPairs(nums1, nums2, k) {}

console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3)) // [1,2],[1,4],[1,6]
console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2)) // [1,1],[1,1]
console.log(kSmallestPairs([1, 2], [3], 3)) // [1,3],[2,3]
