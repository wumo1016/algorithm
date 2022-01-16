/* 最大子数组和(https://leetcode-cn.com/problems/maximum-subarray/description/)
- 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组
- 子数组最少包含一个元素 返回其最大和
- 子数组是数组中的一个连续部分
- 1 <= nums.length <= 105
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let [sum, res] = [0, -Infinity]
  for (const num of nums) {
    if (sum > 0) {
      sum += num
    } else {
      sum = num
    }
    res = Math.max(sum, res)
  }
  return res
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // [4,-1,2,1] 6
console.log(maxSubArray([5, 4, -1, 7, 8])) // 23
console.log(maxSubArray([1])) // 1
