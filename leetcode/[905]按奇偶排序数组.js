/* 按奇偶排序数组(https://leetcode-cn.com/problems/sort-array-by-parity/)
- 给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素
- 你可以返回满足此条件的任何数组作为答案。
- 0 <= A[i] <= 5000
- 1 <= A.length <= 500
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParity(nums) {
  // return nums.sort((a, b) => (a % 2) - (b % 2))
  return nums.sort((a, b) => (a & 1) - (b & 1))
}

console.log(sortArrayByParity([3, 1, 2, 4])) // [2,4,3,1]

// 扁平化
function sortArrayByParity(nums) {
  return nums
    .reduce((res, cur) => (res[cur & 1].push(cur), res), [[], []])
    .flat()
}

// 循环
function sortArrayByParity(nums) {
  return nums.reduce(
    (res, cur) => (cur & 1 ? res.push(cur) : res.unshift(cur), res),
    []
  )
}

// 双指针
function sortArrayByParity(nums) {
  let [left, len] = [0, nums.length]
  while (left < len) {
    if (nums[left] % 2 && left < len - 1) {
      let right = left + 1
      while (right < len) {
        if (nums[right] % 2 === 0) {
          ;[nums[left], nums[right]] = [nums[right], nums[left]]
          break
        }
        right++
      }
    }
    left++
  }
  return nums
}

// 双指针优化
function sortArrayByParity(nums) {
  let [left, right] = [0, nums.length - 1]
  while (left < right) {
    while (nums[right] & 1 && right > 0) right--
    while ((nums[left] & 1) === 0 && left < right) left++
    ;[nums[left], nums[right]] = [nums[right], nums[left]]
  }
  return nums
}
