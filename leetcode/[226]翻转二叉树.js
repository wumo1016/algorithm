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

const data = {
  val: 1,
  left: {
    val: 2
  },
  right: {
    val: 3
  }
}

console.log(invertTree(data))
