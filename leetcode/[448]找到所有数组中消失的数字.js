/* 找到所有数组中消失的数字(https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/)
- 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内
- 请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
- 你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
  const len = nums.length
  const res = Array(len)
    .fill('')
    .map((_, i) => i + 1)
  for (let i = 0; i < len; i++) {
    res[nums[i] - 1] = 0
  }
  return res.filter(v => !!v)
}
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) // [5, 6]
console.log(findDisappearedNumbers([1, 1])) // [2]
