/* 二叉树的锯齿形层序遍历(https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/)
- 给定一个二叉树，返回其节点值的锯齿形层序遍历
- 即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行
*/

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
  if (!root) return []
  let [stack, res, index] = [[root], [], 0]
  while (stack.length) {
    let len = stack.length
    res[index] = []
    while (len--) {
      const { val, left, right } = stack.shift()
      index % 2 === 0 ? res[index].push(val) : res[index].unshift(val)
      left && stack.push(left)
      right && stack.push(right)
    }
    index++
  }
  return res
}

const data = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 4
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 2,
    left: {
      val: 6
    },
    right: {
      val: 7
    }
  }
}

console.log(zigzagLevelOrder(data))
