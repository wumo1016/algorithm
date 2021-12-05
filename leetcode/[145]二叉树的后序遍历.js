/* 二叉树的后序遍历(https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)
- 给定一个二叉树，返回它的后序遍历
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
function postorderTraversal(root) {
  let res = []
  const loop = node => {
    if (node) {
      const { val, left, right } = node
      loop(left)
      loop(right)
      res.push(val)
    }
    return res
  }
  return loop(root)
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
