/* 将有序数组转换为二叉搜索树(https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/)
- 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树
- 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
  const len = nums.length
  if (len < 1) return null
  const c = (len / 2) >> 0
  const root = new TreeNode(nums[c])
  root.left = sortedArrayToBST(nums.slice(0, c))
  root.right = sortedArrayToBST(nums.slice(c + 1))
  return root
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))
