/* 中序遍历
- 1.对根节点的左子树进行中序遍历
- 2.访问根节点
- 3.对右子树进行中序遍历
*/

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

function inorderTraversal(root, res = []) {
  if (!root) return res
  const { val, left, right } = root
  inorderTraversal(left, res)
  res.push(val)
  inorderTraversal(right, res)
  return res
}

console.log(inorderTraversal(tree))

function inorderTraversal1(root, res = []) {
  if (!root) return res
}