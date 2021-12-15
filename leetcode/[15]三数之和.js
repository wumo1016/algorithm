/* 三数之和(https://leetcode-cn.com/problems/3sum/)
- 给你一个包含 n 个整数的数组 nums
- 判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
- 请你找出所有和为 0 且不重复的三元组
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  let len = nums.length
  let res = []
  const isclude = list => {
    let rlen = res.length
    for (let i = 0; i < rlen; i++) {
      let e = 0
      for (let j = 0; j < 3; j++) {
        if (list.includes(res[i][j])) e++
      }
      if (e > 1) return false
    }
    return true
  }
  for (let x = 0; x < len; x++) {
    for (let y = x + 1; y < len; y++) {
      for (let z = y + 1; z < len; z++) {
        const list = [nums[x], nums[y], nums[z]]
        if (list.reduce((a, b) => a + b) === 0 && isclude(list)) {
          res.push(list)
        }
      }
    }
  }
  return res
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([])) // []
console.log(threeSum([0])) // []
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])) // [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
