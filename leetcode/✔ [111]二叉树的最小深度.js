/* 二叉树的最小深度(https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)
- 给定一个二叉树，找出其最小深度。
- 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
// dfs
function minDepth1(root) {
  if (!root) return 0
  root.dep = 1
  const queue = [root]
  while (queue.length) {
    const { left, right, dep } = queue.pop()
    if (!left && !right) return dep
    if (left) queue.unshift({ ...left, dep: dep + 1 })
    if (right) queue.unshift({ ...right, dep: dep + 1 })
  }
}

const data = {
  val: 1,
  left: {
    val: 2
  },
  right: {
    val: 3,
    left: {
      val: 4
    },
    right: {
      val: 5
    }
  }
}

console.log(minDepth(data)) // 2

// bfs
function minDepth(root, res = 0) {
  const dfs = (root, max = 1) => {
    if (!root || (res && max > res)) return res
    if (!root.left && !root.right) {
      res = res ? Math.min(max, res) : max
    }
    dfs(root.left, max + 1)
    dfs(root.right, max + 1)
    return res
  }
  return dfs(root)
}
