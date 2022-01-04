/* 寻找重复数(https://leetcode-cn.com/problems/find-the-duplicate-number/)
- 给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。
- 假设 nums 只有一个重复的整数，找出这个重复的数
- 你设计的解决方案必须不修改数组 nums 且只用常量级 O(1) 的额外空间
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
  const len = nums.length
  let i = -1
  while (++i < len) {
    const val = nums[i]
    for (let j = i + 1; j < len; j++) {
      if (nums[j] === val) return val
    }
  }
}

console.log(findDuplicate([1, 3, 4, 2, 2])) // 2
console.log(findDuplicate([3, 1, 1, 4, 3])) // 3
console.log(findDuplicate([1, 1])) // 1
console.log(findDuplicate([1, 2, 1])) // 1
