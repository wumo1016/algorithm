/* 平衡二叉树(https://leetcode-cn.com/problems/balanced-binary-tree/description/)
- 给定一个二叉树，判断它是否是高度平衡的二叉树。
- 判定标准是 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1
*/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
  if (!root) return true
  const stack = [root]
  const getDep = root =>
    root ? Math.max(getDep(root.left) + 1, getDep(root.right) + 1) : 0
  while (stack.length) {
    const { left, right } = stack.pop()
    if (Math.abs(getDep(left) - getDep(right)) > 1) return false
    left && stack.push(left)
    right && stack.push(right)
  }
  return true
}

const data = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4
      },
      right: {
        val: 4
      }
    },
    right: {
      val: 3
    }
  },
  right: {
    val: 2
  }
}

console.log(isBalanced(data))
