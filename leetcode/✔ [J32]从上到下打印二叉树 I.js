/* 从上到下打印二叉树(https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/)
- 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印
- 返回值数组
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function levelOrder(root) {
  if (!root) return []
  const [queue, res] = [[root], []]
  while (queue.length) {
    const { val, left, right } = queue.pop()
    res.push(val)
    left && queue.unshift(left)
    right && queue.unshift(right)
  }
  return res
}
