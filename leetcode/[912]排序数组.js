/* 排序数组(https://leetcode-cn.com/problems/sort-an-array/)
- 给你一个整数数组 nums，请你将该数组升序排列
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
  return nums.sort((a, b) => a - b)
}

console.log(sortArray([5, 2, 3, 1])) // [1,2,3,5]
console.log(sortArray([5, 1, 1, 2, 0, 0])) // [0,0,1,1,2,5]

// 冒泡排序
function sortArray(nums) {
  const len = nums.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
    }
  }
  return nums
}

// 插入排序
function sortArray(nums) {
  const len = nums.length
  for (let i = 1; i < len; i++) {
    let j = i
    const val = nums[i]
    while (j > 0 && nums[j - 1] > val) {
      nums[j] = nums[j - 1]
      j--
    }
    if (i !== j) nums[j] = val
  }
  return nums
}

// // 快速排序(内存溢出)
function sortArray(nums) {
  const len = nums.length
  if (len < 2) return nums
  const [left, cen, right] = [[], [nums[0]], []]
  const tag = cen[0]
  for (let i = 1; i < len; i++) {
    const val = nums[i]
    if (val > tag) {
      right.push(val)
    } else if (val < tag) {
      left.push(val)
    } else {
      cen.push(val)
    }
  }
  return sortArray(left).concat(cen, sortArray(right))
}

// // 归并排序
// function sortArray(nums) {}

// // 选择排序
// function sortArray(nums) {}
