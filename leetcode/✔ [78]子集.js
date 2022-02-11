/* 子集(https://leetcode-cn.com/problems/subsets/)
- 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
- nums 中的所有整数 互不相同
- 1 <= nums.length <= 6
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const [len, res] = [nums.length, []]
  const loop = (path, index = 0) => {
    res.push(path)
    for (let i = 0; i < len; i++) {
      if (!path.includes(nums[i]) && i >= index) loop(path.concat(nums[i]), i)
    }
  }
  loop([])
  return res
}

// 优化版
function subsets(nums) {
  const [len, res] = [nums.length, []]
  const loop = (path, index = 0) => {
    res.push(path)
    for (let i = index; i < len; i++) {
      loop(path.concat(nums[i]), i + 1)
    }
  }
  loop([])
  return res
}

console.log(subsets([1, 2])) // [[],[1],[2],[1,2]]
console.log(subsets([1, 2, 3])) // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])) // [[],[0]]

// https://leetcode-cn.com/problems/subsets/solution/shou-hua-tu-jie-zi-ji-hui-su-fa-xiang-jie-wei-yun-/
// 面对一个元素 都有两种结果 选入或者不选入
function subsets(nums) {
  const [len, res] = [nums.length, []]
  const loop = (path, index = 0) => {
    if (index === len) {
      res.push(path)
      return res
    }
    loop(path.concat(nums[index]), index + 1) // 选入
    loop(path, index + 1) // 不选入
    return res
  }
  return loop([])
}
