/* 移除元素(https://leetcode-cn.com/problems/remove-element/description/)
- 给你一个数组 nums 和一个值 val
- 你需要原地移除所有数值等于 val 的元素，并返回移除后数组的新长度。
- 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。
- 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement1(nums, val) {
  let i = 0
  while (i < nums.length) {
    nums[i] === val ? nums.splice(i, 1) : i++
  }
  return nums.length
}

console.log(removeElement([3, 2, 2, 3], 3)) // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)) // 5

// 双指针
function removeElement2(nums, val) {
  let [len, left] = [nums.length, 0]
  for (let i = 0; i < len; i++) {
    const right = nums[i]
    if (right !== val) {
      nums[left] = right
      left++
    }
  }
  return left
}
// 双指针优化: 防止了被保留元素的重复赋值
function removeElement(nums, val) {
  let [left, right] = [0, nums.length]
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1]
      right--
    } else {
      left++
    }
  }
  return left
}
