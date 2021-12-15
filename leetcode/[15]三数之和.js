/* 三数之和(https://leetcode-cn.com/problems/3sum/)
- 给你一个包含 n 个整数的数组 nums
- 判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
- 请你找出所有和为 0 且不重复的三元组
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum1(nums) {
  const [len, res] = [nums.length, []]
  const isclude = list => {
    let rlen = res.length
    for (let i = 0; i < rlen; i++) {
      let e = 0
      for (let j = 0; j < 3; j++) {
        if (list[j] === res[i][j]) e++
      }
      if (e > 1) return false
    }
    return true
  }
  for (let x = 0; x < len; x++) {
    let map = new Map()
    for (let y = x + 1; y < len; y++) {
      if (map.has(nums[y])) {
        const list = [...map.get(nums[y]), nums[y]].sort((a, b) => a - b)
        if (isclude(list)) res.push(list)
        map.delete(nums[y])
      } else {
        map.set(0 - (nums[x] + nums[y]), [nums[x], nums[y]])
      }
    }
  }
  return res
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1,-1,2],[-1,0,1]]
// console.log(threeSum([])) // []
// console.log(threeSum([0])) // []
// console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])) // [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
// console.log(threeSum([0, 0, 0, 0])) // [0,0,0,0]
// console.log(threeSum([1, 2, -2, -1])) // []

// 排序
function threeSum(nums) {
  nums = nums.sort((a, b) => a - b)
  console.log(nums)
}
