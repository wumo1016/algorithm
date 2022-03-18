/* 合并二叉树(https://leetcode-cn.com/problems/merge-two-binary-trees/)
- 给你两棵二叉树： root1 和 root2
- 想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）
- 你需要将这两棵树合并成一棵新二叉树
- 合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点
- 返回合并后的二叉树
- 合并过程必须从两个树的根节点开始
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

// 原地合并
function mergeTrees(root1, root2) {
  if (!root1) return root2
  if (!root2) return root1
  root1.val += root2.val
  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)
  return root1
}

// 新建树合并
function mergeTrees(root1, root2) {
  if (!root1) return root2
  if (!root2) return root1
  const root = new TreeNode(root1.val + root2.val)
  root.left = mergeTrees(root1.left, root2.left)
  root.right = mergeTrees(root1.right, root2.right)
  return root1
}
