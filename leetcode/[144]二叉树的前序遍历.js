/* 二叉树的前序遍历(https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)
- 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal(root, res = []) {
  if (!root) return res
  res.push(root.val)
  preorderTraversal(root.left, res)
  preorderTraversal(root.right, res)
  return res
}

const data = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

console.log(preorderTraversal(data)) // [(1, 2, 4, 5, 3, 6, 7)]
