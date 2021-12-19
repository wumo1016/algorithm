/* 路径总和(https://leetcode-cn.com/problems/path-sum/)
- 给你二叉树的根节点 root 和一个表示目标和的整数targetSum
- 判断该树中是否存在 根节点到叶子节点 的路径
- 这条路径上所有节点值相加等于目标和 targetSum
- 如果存在，返回 true ；否则，返回 false
- 叶子节点 是指没有子节点的节点
*/

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// dfs
function hasPathSum(root, targetSum) {
  if (!root) return false
  let invalid = false
  function dfs(root, sum = 0) {
    if (!root || invalid) return
    sum += root.val
    if (!root.left && !root.right && sum === targetSum) invalid = true
    dfs(root.left, sum)
    dfs(root.right, sum)
    return invalid
  }
  return dfs(root)
}

// bfs
function hasPathSum(root, targetSum) {
  if (!root) return false
  const queue = [[root, root.val]]
  while (queue.length) {
    const [{ left, right }, sum] = queue.pop()
    if (!left && !right && sum === targetSum) return true
    if (left) queue.unshift([left, sum + left.val])
    if (right) queue.unshift([right, sum + right.val])
  }
  return false
}

// dfs优化
const hasPathSum = (root, sum) => {
  if (root == null) return false
  if (root.left == null && root.right == null) return sum - root.val == 0
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  )
}
