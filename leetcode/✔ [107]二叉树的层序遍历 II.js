/* 二叉树的层序遍历 II(https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)
- 给定一个二叉树，返回其节点值自底向上的层序遍历
*/

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrderBottom(root) {
  if (!root) return []
  let [queue, res] = [[root], []]
  while (queue.length) {
    let len = queue.length
    res.unshift([])
    while (len--) {
      const { left, right, val } = queue.pop()
      res[0].push(val)
      left && queue.unshift(left)
      right && queue.unshift(right)
    }
  }
  return res
}
