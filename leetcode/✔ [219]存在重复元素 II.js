/* 存在重复元素 II(https://leetcode-cn.com/problems/contains-duplicate-ii/)
- 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j 
- 满足 nums[i] == nums[j] 且 abs(i - j) <= k 
- 如果存在，返回 true ；否则，返回 false 
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 哈希表
function containsNearbyDuplicate(nums, k) {
  const [map, len] = [new Map(), nums.length]
  for (let i = 0; i < len; i++) {
    const val = nums[i]
    if (map.has(val) && i - map.get(val) <= k) return true
    map.set(val, i)
  }
  return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)) // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)) // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)) // false

// 滑动窗口 维护一个大小为k的set，如果在这期间出现重复元素 则满足需要
function containsNearbyDuplicate(nums, k) {
  const set = new Set()
  let i = 0
  for (const val of nums) {
    if (set.has(val)) return true
    set.add(val)
    if (set.size > k) {
      set.delete(nums[i++])
    }
  }
  return false
}
