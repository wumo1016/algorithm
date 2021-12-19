/* 二叉树的最小深度(https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)
- 给定一个二叉树，找出其最小深度。
- 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root, res = 0) {
  const dfs = (root, max = 1) => {
    if (!root) return res
    if (!root.left && !root.right) {
      res = res ? Math.min(max, res) : max
    }
    dfs(root.left, max + 1)
    dfs(root.right, max + 1)
    return res
  }
  return dfs(root)
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
