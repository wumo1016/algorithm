/* 反转字符串(https://leetcode-cn.com/problems/reverse-string/s)
- 编写一个函数，其作用是将输入的字符串反转过来。
- 输入字符串以字符数组 s 的形式给出。
- 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题
- 1 <= s.length <= 105
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  return s.reverse()
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])) // ["o","l","l","e","h"]
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])) // ["h","a","n","n","a","H"]

function reverseString(s) {
  for (let left = 0, right = s.length - 1; left < right; left++, right--) {
    ;[s[left], s[right]] = [s[right], s[left]]
  }
  return s
}
