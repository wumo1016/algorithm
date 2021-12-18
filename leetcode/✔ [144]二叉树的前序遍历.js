/* 二叉树的前序遍历(https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)
- 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal1(root, res = []) {
  if (!root) return res
  const { val, left, right } = stack.pop()
  res.push(Sval)
  preorderTraversal(Sleft, res)
  preorderTraversal(Sright, res)
  return res
}

const data = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 5,
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

// 迭代 入栈 右左 => 左右
function preorderTraversal(root, res = []) {
  if (!root) return res
  const stack = [root]
  while (stack.length) {
    const { val, left, right } = stack.pop()
    res.push(val)
    if (right) stack.push(right)
    if (left) stack.push(left)
  }
  return res
}
