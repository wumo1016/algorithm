/* 二叉树的层序遍历(https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)
- 给你一个二叉树，请你返回其按 层序遍历 得到的节点值
*/

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder1(root) {
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

// 每次将同一层的数据都弹出
function levelOrder(root) {
  if (!root) return []
  let [queue, res, index] = [[root], [], 0]
  while (queue.length) {
    let len = queue.length
    res[index] = []
    while (len--) {
      const { left, right, val } = queue.pop()
      res[index].push(val)
      left && queue.unshift(left)
      right && queue.unshift(right)
    }
    index++
  }
  return res
}
