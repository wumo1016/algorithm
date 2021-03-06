/* 后序遍历
- 1.对左子树进行中序遍历
- 2.对右子树进行中序遍历
- 3.访问根节点
*/

const tree = {
  val: 7,
  left: {
    val: 3,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: {
    val: 6,
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
  }
}

function postorderTraversal(root, res = []) {
  if (!root) return res
  postorderTraversal(root.left, res)
  postorderTraversal(root.right, res)
  res.push(root.val)
  return res
}

// console.log(postorderTraversal(tree))
console.log(postorderTraversal1(tree))

// 非递归版
function postorderTraversal1(root, res = []) {
  if (!root) return res
  let stack = [root]
  while (stack.length) {
    const p = stack.pop()
    res.unshift(p.val)
    if (p.left) stack.push(p.left)
    if (p.right) stack.push(p.right)
  }
  return res
}
