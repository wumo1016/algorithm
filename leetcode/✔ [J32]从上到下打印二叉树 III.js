/* 从上到下打印二叉树 III(https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/)
- 实现一个函数按照之字形顺序打印二叉树
- 即第一行按照从左到右的顺序打印
- 第二层按照从右到左的顺序打印
- 第三行再按照从左到右的顺序打印，其他行以此类推
*/

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  if (!root) return []
  let [stack, res, index] = [[root], [], 0]
  while (stack.length) {
    let len = stack.length
    res[index] = []
    while (len--) {
      if (index % 2 === 1) {
        const { val, left, right } = stack.pop()
        res[index].push(val)
        right && stack.unshift(right)
        left && stack.unshift(left)
      } else {
        const { val, left, right } = stack.shift()
        res[index].push(val)
        left && stack.push(left)
        right && stack.push(right)
      }
    }
    index++
  }
  return res
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
    val: 3,
    left: {
      val: 6
    },
    right: {
      val: 7
    }
  }
}

const data1 = {
  val: 1,
  left: {
    val: 2
  }
}

// console.log(levelOrder(data))
console.log(levelOrder(data1))
