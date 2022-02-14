/* 调整数组顺序使奇数位于偶数前面(https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/)
- 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function exchange(nums) {
  const [pre, post] = [[], []]
  for (const val of nums) {
    ;(val % 2 === 0 ? post : pre).push(val)
  }
  return pre.concat(post)
}

console.log(exchange([1, 2, 3, 4])) // [1,3,2,4]
