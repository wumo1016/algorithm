/* 消失的数字(https://leetcode-cn.com/problems/missing-number-lcci/)
- 数组nums包含从0到n的所有整数，但其中缺了一个。
- 请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  let [res, max] = [0, nums.length]
  for (const val of nums) {
    res += val
  }
  return ((1 + max) * max) / 2 - res
}

console.log(missingNumber([0])) // 1
console.log(missingNumber([3, 0, 1])) // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])) // 8
