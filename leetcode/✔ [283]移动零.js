/* 移动零(https://leetcode-cn.com/problems/move-zeroes/)
- 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序
- 请注意 ，必须在不复制数组的情况下原地对数组进行操作
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 遍历数组 将0与非下一个非0进行交换
function moveZeroes(nums) {
  debugger
  const len = nums.length
  for (let i = 0, num = 0; i < len - num; i++) {
    if (nums[i] === 0) {
      let j = i
      while (j < len) {
        if (nums[j] !== 0) {
          ;[nums[i], nums[j]] = [nums[j], nums[i]]
          break
        }
        j++
      }
      num++
    }
  }
  return nums
}

console.log(moveZeroes([0, 1, 0, 0, 3, 12])) // [1,3,12,0,0]
// console.log(moveZeroes([0])) // [0]
// console.log(moveZeroes([0, 1])) // [0]

// 利用sort
function moveZeroes(nums) {
  return nums.sort((a, b) => {
    console.log(a, b)
    return b ? 0 : -1
  })
}

// 双指针交换
// 1.如果都是非0 都前进
// 2.如果遇到0 就让 j 停在0的位置 i继续前进 知道遇到非0然后与j进行交换
function moveZeroes(nums) {
  let [i, j, len] = [0, 0, nums.length]
  while (i < len) {
    if (nums[i] !== 0) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      j++
    }
    i++
  }
  return nums
}

// 先将非0集中到前面 后面直接用0填充
function moveZeroes(nums) {
  let [j, len] = [0, nums.length]
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i]
    }
  }
  for (let i = j; i < len; i++) {
    nums[i] = 0
  }
  return nums
}
