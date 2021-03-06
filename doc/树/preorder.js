/* 先序遍历
- 1.访问根节点
- 2.对根节点的左子树进行先序遍历
- 3.对根节点的右子树进行先序遍历
*/

const tree = {
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

function preorderTraversal(root, res = []) {
  if (!res) return res
  const { val, left, right } = stack.pop()
  res.push(val)
  preorderTraversal(left, res)
  preorderTraversal(right, res)
  return res
}

console.log(preorderTraversal(tree)) // 1 2 3 4 5 6 7
console.log(preorderTraversal1(tree)) // 1 2 3 4 5 6 7

// 非递归版
function preorderTraversal1(root, res = []) { 
  if (!res) return res
  const stack = [root]
  while (stack.length) {
    const { val, left, right } = stack.pop()
    res.push(val)
    if (right) stack.push(right)
    if (left) stack.push(left)
  }
  return res
}
