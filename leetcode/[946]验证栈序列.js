/* 验证栈序列(https://leetcode-cn.com/problems/validate-stack-sequences/)
- 给定pushed和popped两个序列，每个序列中的值都不重复
- 只有当它们可能是在最初空栈上进行的推入push和弹出pop操作序列的结果时，返回 true；否则，返回 false
*/

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
function validateStackSequences(pushed, popped) {}

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])) // true
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])) // false
