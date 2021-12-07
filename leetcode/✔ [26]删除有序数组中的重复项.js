/* 删除有序数组中的重复项(https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/description/)
- 给你一个有序数组 nums ，请你原地删除重复出现的元素
- 使每个元素 只出现一次 ，返回删除后数组的新长度
- 不要使用额外的数组空间，你必须在原地修改输入数组 并在使用O(1)额外空间的条件下完成
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let i = 0
  while (i < nums.length) {
    nums[i] === nums[i + 1] ? nums.splice(i + 1, 1) : i++
  }
  return nums.length
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))

// 只修改前面正确的部分
function removeDuplicates(nums) {
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      nums[++i] = nums[j]
    }
  }
  return i + 1
}
