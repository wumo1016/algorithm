/* N叉树的前序遍历(https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/)
- 给定一个 N 叉树，返回其节点值的 前序遍历
*/

/**
 * @param {Node|null} root
 * @return {number[]}
 */
function preorder(root) {
  if (!root) return []
  function dfs(root, res) {
    if (!root) return
    res.push(root.val)
    ;(root.children || []).forEach(child => dfs(child, res))
    return res
  }
  return dfs(root, [])
}

// 非递归版
function preorder(root) {
  if (!root) return []
  const [stack, res] = [[root], []]
  while (stack.length) {
    const { val, children } = stack.pop()
    res.push(val)
    for (let i = children?.length - 1 || 0; i >= 0; i--) {
      stack.push(children[i])
    }
  }
  return res
}
