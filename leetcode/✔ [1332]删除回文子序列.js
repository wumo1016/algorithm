/* 删除回文子序列(https://leetcode-cn.com/problems/remove-palindromic-subsequences/
- 给你一个字符串 s，它仅由字母 'a' 和 'b' 组成
- 每一次删除操作都可以从 s 中删除一个回文 子序列
- 返回删除给定字符串中所有字符（字符串为空）的最小删除次数
-「子序列」定义：如果一个字符串可以通过删除原字符串某些字符而不改变原字符顺序得到，那么这个字符串就是原字符串的一个子序列。
- 回文」定义：如果一个字符串向后和向前读是一致的，那么这个字符串就是一个回文
*/

/**
 * @param {string} s
 * @return {number}
 */
function removePalindromeSub(s) {
  let [left, right] = [0, s.length - 1]
  while (left < right) {
    if (s[left++] !== s[right--]) return 2
  }
  return 1
}

console.log(removePalindromeSub('ababa')) // 1
console.log(removePalindromeSub('abb')) // 2
console.log(removePalindromeSub('baabb')) // 2
