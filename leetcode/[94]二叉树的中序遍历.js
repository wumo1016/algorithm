/* 二叉树的中序遍历(https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)
- 给定一个二叉树的根节点 root ，返回它的 中序 遍历
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal(root, res = []) {
  if (!root) return res
  postorderTraversal(root.left, res)
  postorderTraversal(root.right, res)
  res.push(root.val)
  return res
}

console.log(console.log(postorderTraversal(tree)))
