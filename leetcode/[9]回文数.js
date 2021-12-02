/* 回文数(https://leetcode-cn.com/problems/palindrome-number/description/)
- 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false
- 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是
- -231 <= x <= 231 - 1
- x = -101 > false
*/

/**
 * @param {number} x
 * @return {boolean}
 */
// 从中间分割开 后半段反转后比较
function isPalindrome(x) {
  if (x < 0) return false
  if (x < 10) return true
  x = String(x)
  const len = x.length
  const center = (len / 2) | 0
  return (
    x.slice(0, center) ===
    x
      .slice(len % 2 === 0 ? center : center + 1)
      .split('')
      .reverse()
      .join('')
  )
}

console.log(isPalindrome(1000030001)) // false
console.log(isPalindrome(10)) // false
console.log(isPalindrome(11)) // true
console.log(isPalindrome(101)) // true
console.log(isPalindrome(-101)) // false
console.log(isPalindrome(20211202)) // true
console.log(isPalindrome(20211201)) // false
// 双指针对比
function isPalindrome(x) {
  if (x < 0) return false
  if (x < 10) return true
  x = String(x)
  let [start, end] = [0, x.length - 1]
  while (end - start > 0) {
    if (x[start] !== x[end]) return false
    start++
    end--
  }
  return true
}
