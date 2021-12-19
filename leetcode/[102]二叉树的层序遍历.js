/* 二叉树的层序遍历(https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)
- 给你一个二叉树，请你返回其按 层序遍历 得到的节点值
*/

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  if (!root) return []
  const [queue, res] = [[[root, 0]], []]
  while (queue.length) {
    const [{ left, right, val }, dep] = queue.pop()
    if (!res[dep]) res[dep] = []
    res[dep].push(val)
    if (left) queue.unshift([left, dep + 1])
    if (right) queue.unshift([right, dep + 1])
  }
  return res
}

const data = {
  val: 2,
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

console.log(levelOrder(data))

