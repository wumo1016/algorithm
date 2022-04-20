/* 删除字符串中的所有相邻重复项(https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/)
- 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们
- 在 S 上反复执行重复项删除操作，直到无法继续删除。
- 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
*/

/**
 * @param {string} s
 * @return {string}
 */
function removeDuplicates(s) {
  while (/([a-z])\1/.test(s)) {
    s = s.replace(RegExp['$&'], '')
  }
  return s
}

console.log(removeDuplicates('abbaca')) // "ca"

// 利用栈
function removeDuplicates(s) {
  const stack = []
  for (const item of s) {
    if (stack.at(-1) === item) {
      stack.pop()
    } else {
      stack.push(item)
    }
  }
  return stack.join('')
}
