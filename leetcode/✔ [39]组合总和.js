/* 组合总和(https://leetcode-cn.com/problems/combination-sum/)
- 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target 
- 找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。
- candidates 中的 同一个 数字可以 无限制重复被选取 。
- 如果至少一个数字的被选数量不同，则两种组合是不同的。 
- 对于给定的输入，保证和为 target 的不同组合数少于 150 个。
- 1 <= candidates[i] <= 20
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const [res, len] = [[], candidates.length]
  const dfs = (total, cur, i) => {
    if (i >= len) return
    if (total === target) return res.push(cur)
    dfs(total, cur, i + 1) // 直接跳过
    if (total + candidates[i] <= target)
      dfs(total + candidates[i], [...cur, candidates[i]], i) // 选择当前
  }
  dfs(0, [], 0)
  return res
}

console.log(combinationSum([2, 3, 6, 7], 7)) // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)) // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)) // []
