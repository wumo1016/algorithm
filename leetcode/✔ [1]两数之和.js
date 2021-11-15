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

// 暴力破解
function twoSum(nums, target) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j]
      }
    }
  }
  return res
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(twoSum(data, 8))
console.log(twoSum1(data, 8))

// 哈希解法
function twoSum1(nums, target) {
  const map = new Map()
  const len = nums.length
  for (let i = 0; i < len; i++) {
    const poor = target - nums[i]
    if (map.has(poor) && map.get(poor) !== i) {
      return [map.get(poor), i]
    }
    map.set(nums[i], i)
  }
}
