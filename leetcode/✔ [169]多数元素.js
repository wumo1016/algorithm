/* 多数元素(https://leetcode-cn.com/problems/majority-element/)
- 给定一个大小为 n 的数组，找到其中的多数元素。
- 多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
- 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
- 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  const cur = []
  for (const val of nums) {
    if (cur.length === 0 || cur.includes(val)) {
      cur.push(val)
    } else {
      cur.pop()
    }
  }
  return cur[0]
}

console.log(majorityElement([3, 2, 3])) // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) // 2

// 优化版
function majorityElement(nums) {
  let [sum, cur] = [0]
  for (const val of nums) {
    if (sum === 0) cur = val
    cur === val ? sum++ : sum--
  }
  return cur
}
