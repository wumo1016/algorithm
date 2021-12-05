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
function postorderTraversal1(root, res = []) {
  if (root) {
    postorderTraversal(root.left, res)
    postorderTraversal(root.right, res)
    res.push(root.val)
  }
  return res
}

const data = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 1
    },
    right: {
      val: 2
    }
  },
  right: {
    val: 6,
    left: {
      val: 7
    },
    right: {
      val: 8
    }
  }
}

console.log(postorderTraversal(data))
/*
入栈顺序 => 根左右
出栈顺序 => 右左根
然后将节点的值 根右左 的方式入栈即可
*/
function postorderTraversal(root, res = []) {
  const stack = []
  if (root) stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    res.unshift(node.val)
    const { left, right } = node
    if (left) stack.push(left)
    if (right) stack.push(right)
  }
  return res
}
