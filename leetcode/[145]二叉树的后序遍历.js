/* 二叉树的后序遍历(https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)
- 给定一个二叉树，返回它的后序遍历
- 从底层开始遍历 然后先左边
- 返回值的数组
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
function postorderTraversal(root, res = []) {
  if (root) {
    postorderTraversal(root.left, res)
    postorderTraversal(root.right, res)
    res.push(root.val)
  }
  return res
}

const data = {
  val: 1,
  right: {
    val: 2,
    left: {
      val: 3
    }
  }
}

console.log(postorderTraversal(data))
