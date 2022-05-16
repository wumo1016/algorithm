/* 除自身以外数组的乘积(https://leetcode.cn/problems/product-of-array-except-self/)
- 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 
- 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内
- 请不要使用除法，且在 O(n) 时间复杂度内完成此题
- 2 <= nums.length <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// res1每一位取前一位到0的乘积
// res2每一位取后一位到最后的乘积
function productExceptSelf(nums) {
  const len = nums.length
  const [list1, list2] = [[1], Array(len).fill(1)]
  for (let i = 0; i < len - 1; i++) {
    list1[i + 1] = list1[i] * nums[i]
  }
  for (let i = len - 1; i > 0; i--) {
    list2[i - 1] = list2[i] * nums[i]
  }
  return nums.map((_, i) => {
    if (i === 0) return list2[0]
    if (i === len - 1) return list1[i]
    return list1[i] * list2[i]
  })
}

console.log(productExceptSelf([1, 2, 3, 4])) // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])) // [0,0,9,0,0]
