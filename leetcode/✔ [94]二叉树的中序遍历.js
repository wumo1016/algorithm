/* 二叉树的中序遍历(https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)
- 给定一个二叉树的根节点 root ，返回它的 中序 遍历
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal(root, res = []) {
  if (!root) return res
  postorderTraversal(root.left, res)
  res.push(root.val)
  postorderTraversal(root.right, res)
  return res
}

const tree = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 6,
    left: {
      val: 5,
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

// console.log(postorderTraversal(tree))
console.log(postorderTraversal1(tree))

// 非递归版
function postorderTraversal1(root, res = []) {
  if (!root) return res
  let [stack, p] = [[], root]
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const last = stack.pop()
    res.push(last.val)
    p = last.right
  }
  return res
}
