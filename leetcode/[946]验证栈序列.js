/* 验证栈序列(https://leetcode-cn.com/problems/validate-stack-sequences/)
- 给定pushed和popped两个序列，每个序列中的值都不重复
- 只有当它们可能是在最初空栈上进行的推入push和弹出pop操作序列的结果时，返回 true；否则，返回 false
- popped.length == pushed.length
- popped 是 pushed 的一个排列
*/

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
function validateStackSequences(pushed, popped) {
  let [m, cache, first, last] = [pushed.length, [], null, null]
  for (let i = 0; i < m; i++) {
    cache.push(pushed[i])
    while (
      (last = cache[cache.length - 1]) === (first = popped[0]) &&
      popped.length > 0
    ) {
      cache.pop()
      popped.shift()
    }
  }
  return popped.length === 0
}

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])) // true
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])) // false
