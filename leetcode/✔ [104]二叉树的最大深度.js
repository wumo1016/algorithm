/* 二叉树的最大深度(https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
- 给定一个二叉树，找出其最大深度。
- 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth1(root) {
  let res = 0
  function loop(root, max = 1) {
    if (!root) return res
    if (max > res) res = max
    loop(root.left, max + 1)
    loop(root.right, max + 1)
    return res
  }
  return loop(root)
}

const data = {
  val: 3,
  left: {
    val: 9
  },
  right: {
    val: 20,
    left: {
      val: 15
    },
    right: {
      val: 7
    }
  }
}

console.log(maxDepth(data)) // 3

// dfs
function maxDepth(root) {
  return root ? Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1) : 0
}
