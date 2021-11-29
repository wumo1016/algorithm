/* 最小差值 I(https://leetcode-cn.com/problems/smallest-range-i/description/)
- 给你一个整数数组 nums，请你给数组中的每个元素 nums[i] 都加上一个任意数字 x （-k <= x <= k）
- 从而得到一个新数组 result
- 返回数组 result 的最大值和最小值之间可能存在的最小差值
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function smallestRangeI(nums, k) {
  const [max, min] = [Math.max(...nums), Math.min(...nums)]
  const val = max - min - 2 * k
  return val <= 0 ? 0 : val
}

const data = [5, 3, 6, 4, 1, 0, 9]
console.log(smallestRangeI(data, 5))
