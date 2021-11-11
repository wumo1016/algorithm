/* 两数之和
- 给定一个整数数组 nums 和一个整数目标值 target
- 在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标
- 默认每种输入只会对应一个答案 且数组中同一个元素在答案里不能重复出现
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let stop = false,
    res = []
  for (let i = 0; i < nums.length; i++) {
    if (stop) break
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        stop = true
        res = [i, j]
        break
      }
    }
  }
  return res
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(twoSum(data, 8))
