/* 全排列(https://leetcode-cn.com/problems/permutations/)
- 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
- nums 中的所有整数 互不相同
- 1 <= nums.length <= 6
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const [len, res, used] = [nums.length, [], {}]
  const loop = path => {
    if (path.length === len) {
      res.push(path)
      return res
    }
    for (const num of nums) {
      if (!path.includes(num)) loop(path.concat(num))
    }
    return res
  }
  return loop([])
}

console.log(permute([1, 2, 3])) // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])) // [[0,1],[1,0]]
console.log(permute([1])) // [[1]]

// 优化版
function permute(nums) {
  const [len, res, used] = [nums.length, [], {}]
  const loop = path => {
    if (path.length === len) {
      res.push(path)
      return res
    }
    for (const num of nums) {
      if (used[num]) continue
      used[num] = true
      loop(path.concat(num))
      used[num] = false
    }
    return res
  }
  return loop([])
}
