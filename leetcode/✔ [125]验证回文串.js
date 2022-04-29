/* 验证回文串(https://leetcode-cn.com/problems/valid-palindrome/)
- 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
- 本题中，我们将空字符串定义为有效的回文串。
- 1 <= s.length <= 2 * 105
*/

/**
 * @param {string} s
 * @return {boolean}
 */
// 双指针1
function isPalindrome(s) {
  s = s.replace(/[^a-z\d]/gi, '')
  let [left, right] = [0, s.length - 1]
  while (left < right) {
    if (s[left++].toLowerCase() !== s[right--].toLowerCase()) return false
  }
  return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome('race a car')) // false
console.log(
  isPalindrome('Damosel, a poem? A carol? Or a cameo pale? (So mad!)')
) // true

// 双指针2
function isPalindrome(s) {
  let [left, right, reg] = [0, s.length - 1, /[a-z]|\d/i]
  while (left < right) {
    while (!reg.test(s[left])) left++
    while (!reg.test(s[right])) right--
    if (left > right) return true
    if (s[left++].toLowerCase() !== s[right--].toLowerCase()) return false
  }
  return true
}
