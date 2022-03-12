/* N 叉树的后序遍历(https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/)
- 给定一个 n 叉树的根节点 root ，返回 其节点值的 后序遍历 。
- n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔
*/

function Node(val, children) {
  this.val = val
  this.children = children
}

/**
 * @param {Node|null} root
 * @return {number[]}
 */
function postorder(root) {
  const res = []
  const loop = data => {
    if (!data) return res
    if (data.children?.length) data.children.forEach(loop)
    res.push(data.val)
    return res
  }
  return loop(root)
}

console.log(
  postorder({
    val: 1,
    children: [
      {
        val: 3,
        children: [
          {
            val: 5
          },
          {
            val: 6
          }
        ]
      },
      {
        val: 2
      },
      {
        val: 4
      }
    ]
  })
) // [ 5, 6, 3, 2, 4, 1 ]

// 广度遍历1
function postorder(root) {
  const [queue, res, set] = [[root], [], new Set()]
  while (queue.length) {
    const first = queue[queue.length - 1]
    if (first) {
      if (!set.has(first) && first.children) {
        set.add(first)
        const chlidren = first.children
        const len = chlidren.length
        for (let i = len - 1; i >= 0; i--) {
          if (chlidren[i]) queue.push(chlidren[i])
        }
      } else {
        res.push(queue.pop().val)
      }
    } else {
      queue.pop()
    }
  }
  return res
}
// 广度遍历2
// function postorder(root) {
//   const [queue, res] = [[root], []]
//   while (queue.length) {
//     const last = queue.pop()
//     if (last) {
//       res.unshift(last.val)
//       if (last.children) {
//         for (const child of last.children) {
//           if (child) queue.push(child)
//         }
//       }
//     }
//   }
//   return res
// }
