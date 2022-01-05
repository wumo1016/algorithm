/* 相同的树(https://leetcode-cn.com/problems/same-tree/)
- 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同
- 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的
*/

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  return JSON.stringify(p) === JSON.stringify(q)
}

// 递归
function isSameTree(p, q) {
  let valid = true
  function loop(p, q) {
    if (!valid) return
    if (p === q) return
    if (!p || !q) return (valid = false)
    if (p.val !== q.val) return (valid = false)
    loop(p.left, q.left)
    loop(p.right, q.right)
  }
  loop(p, q)
  return valid
}
