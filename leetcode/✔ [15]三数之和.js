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

/* 排序
首先对数组进行排序，排序后固定一个数 nums[i]，
再使用左右指针指向 nums[i]后面的两端，
数字分别为 nums[L]和 nums[R]，
计算三个数的和 sumsum 判断是否满足为 0，满足则添加进结果集
如果 nums[i]大于 0，则三数之和必然无法等于 0，结束循环
如果 nums[i] == nums[i-1]，则说明该数字重复，会导致结果重复，所以应该跳过
当 sum == 0 时，nums[L] == nums[L+1] 则会导致结果重复，应该跳过，L++
当 sum == 0 时，nums[R] == nums[R-1] 则会导致结果重复，应该跳过，R--
*/
function threeSum(nums) {
  const [len, ans] = [nums.length, []]
  if (nums == null || len < 3) return ans
  nums.sort((a, b) => a - b) // 排序
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (i > 0 && nums[i] == nums[i - 1]) continue // 去重
    let [L, R] = [i + 1, len - 1]
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]
      if (sum == 0) {
        ans.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] == nums[L + 1]) L++ // 去重
        while (L < R && nums[R] == nums[R - 1]) R-- // 去重
        L++
        R--
      } else if (sum < 0) L++
      else if (sum > 0) R--
    }
  }
  return ans
}
