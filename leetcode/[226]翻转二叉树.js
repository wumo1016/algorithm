/* 翻转二叉树(https://leetcode-cn.com/problems/invert-binary-tree/)
- 翻转一棵二叉树
- 就是树的左右节点互换
*/

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
  const invert = root => {
    if (root) {
      ;[root.left, root.right] = [invert(root.right), invert(root.left)]
    }
    return root
  }
  return invert(root)
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
