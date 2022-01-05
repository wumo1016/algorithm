/* 翻转二叉树(https://leetcode-cn.com/problems/invert-binary-tree/)
- 翻转一棵二叉树
- 就是树的左右节点互换
*/

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// 递归
function invertTree(root) {
  if (root) {
    ;[root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  }
  return root
}
// 递归1
function invertTree(root) {
  if (!root) return null
  return {
    val: root.val,
    left: invertTree(root.right),
    right: invertTree(root.left)
  }
}

const data = {
  val: 1,
  left: {
    val: 2
  },
  right: {
    val: 3
  }
}

// console.log(invertTree(data))
console.log(invertTree1(data))

// bfs
function invertTree1(root) {
  if (!root) return root
  const queue = [root]
  while (queue.length) {
    const l = queue.pop()
    ;[l.left, l.right] = [l.right, l.left]
    if (l.left) queue.unshift(l.left)
    if (l.right) queue.unshift(l.right)
  }
  return root
}
