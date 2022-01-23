/* 丢失的数字(https://leetcode-cn.com/problems/missing-number/)
- 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  nums.sort((a, b) => a - b)
  const last = nums.length + 1
  for (let i = 0; i < last; i++) {
    if (nums[i] !== i) return i
  }
}

console.log(missingNumber([3, 0, 1])) // 2
console.log(missingNumber([0, 1])) // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])) // 8
