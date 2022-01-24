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

console.log(subsets([1, 2])) // [[],[1],[2],[1,2]]
console.log(subsets([1, 2, 3])) // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])) // [[],[0]]
