/* 对称二叉树(https://leetcode-cn.com/problems/symmetric-tree/)
- 给定一个二叉树，检查它是否是镜像对称的。
*/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 左子树-中左右 右子树-中右左 然后对比
function isSymmetric(root) {
  const [leftList, rightList] = [[], []]
  function loop1(root) {
    if (root === null) leftList.push(null)
    if (!root) return
    leftList.push(root.val)
    loop1(root.left)
    loop1(root.right)
  }
  loop1(root.left)
  function loop2(root) {
    if (root === null) rightList.push(null)
    if (!root) return
    rightList.push(root.val)
    loop2(root.right)
    loop2(root.left)
  }
  loop2(root.right)
  return leftList.toString() === rightList.toString()
}
// 判断左子树的左节点和右子树的右节点 且 左子树的右节点和右子树的左节点
function isSymmetric(root) {
  if (!root) return true
  function loop(left, right) {
    if (!left && !right) return true
    if (
      left &&
      right &&
      left.val === right.val &&
      loop(left.left, right.right) &&
      loop(left.right, right.left)
    )
      return true
    return false
  }
  return loop(root.left, root.right)
}
