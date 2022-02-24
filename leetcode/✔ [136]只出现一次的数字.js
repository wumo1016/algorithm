/* 只出现一次的数字(https://leetcode-cn.com/problems/single-number/)
- 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
- 你的算法应该具有线性时间复杂度(O(n))。 你可以不使用额外空间来实现吗
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

function singleNumber(nums) {
  let res = 0
  for (const val of nums) {
    res ^= val
  }
  return res
}

console.log(singleNumber([2, 2, 1])) // 1
console.log(singleNumber([4, 1, 2, 1, 2])) // 4
console.log(
  singleNumber([
    -80, 48, 777, 423, -435, 349, -988, -379, -197, 192, 13, -496, -787, 94,
    329, -490, -230, -929, 457, 591, 75, -80, 48, 777, 423, -435, 349, -988,
    -379, -197, 192, 13, -496, -787, 94, 329, -490, -230, -929, 457, 591, 75,
    -477
  ])
) // -477
