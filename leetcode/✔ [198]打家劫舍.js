/* 打家劫舍(https://leetcode-cn.com/problems/house-robber/)
- 你是一个专业的小偷，计划偷窃沿街的房屋
- 每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统
- 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警
- 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额
- 1 <= nums.length <= 100
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
// f(k) = Math.max(f(k - 2 + cur), f(k - 1))
function rob(nums) {
  const len = nums.length
  if (len < 3) return Math.max(...nums)
  let [pre1, pre2] = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < len; i++) {
    const temp = pre1
    pre1 = pre2
    pre2 = Math.max(temp + nums[i], pre2)
  }
  return pre2
}

console.log(rob([1, 2, 3, 1])) // 4
console.log(rob([2, 7, 9, 3, 1])) // 12
console.log(rob([2, 1, 1, 2])) // 4
