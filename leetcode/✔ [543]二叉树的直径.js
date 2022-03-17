/* 二叉树的直径(https://leetcode-cn.com/problems/diameter-of-binary-tree/)
- 给定一棵二叉树，你需要计算它的直径长度。
- 一棵二叉树的直径长度是任意两个结点路径长度中的最大值。
- 这条路径可能穿过也可能不穿过根结点。
- 两结点之间的路径长度是以它们之间边的数目表示
*/
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
  let max = 0
  const loop = data => {
    if (data.left) loop(data.left)
    if (data.right) loop(data.right)
    const leftLevel = (data.left && data.left.level) || 0
    const rightLevel = (data.right && data.right.level) || 0
    data.level = Math.max(leftLevel, rightLevel) + 1
    data.totalLevel = leftLevel + rightLevel
    max = Math.max(max, data.totalLevel)
  }
  loop(root)
  return max
}

// 简化版
function diameterOfBinaryTree(root) {
  let max = 0
  const loop = data => {
    if (!data) return 0
    const [leftLevel, rightLevel] = [loop(data.left), loop(data.right)]
    max = Math.max(max, leftLevel + rightLevel)
    return Math.max(leftLevel, rightLevel) + 1
  }
  loop(root)
  return max
}

const data = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 3
  }
}
console.log(diameterOfBinaryTree(data)) // 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]

const data1 = {
  val: 1,
  left: {
    val: 2
  }
}
console.log(diameterOfBinaryTree(data1)) // 1

const data2 = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 3
    }
  }
}
console.log(diameterOfBinaryTree(data2))
