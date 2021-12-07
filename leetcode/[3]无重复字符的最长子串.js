/* 无重复字符的最长子串(https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)
- 给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度
*/

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  if (!s) return 0
  let start = 0,
    res = [],
    len = s.length,
    cache = []
  for (let i = 0; i < len; i++) {
    const cur = s.slice(start, i)
    const index = cur.indexOf(s[i])
    if (index > -1) {
      if (cache.length) {
        if (res[1] - res[0] > cache[1] - cache[0]) {
          cache = res
        }
      } else {
        cache = res
      }
      start = index + start + 1
    } else {
      res = [start, i + 1]
    }
  }
  if (start === 0) return len
  if (cache.length < 1) return res[1] - res[0]
  res = [start, len]
  return Math.max(res[1] - res[0], cache[1] - cache[0])
}

console.log(lengthOfLongestSubstring('abcabcbb')) // 3
console.log(lengthOfLongestSubstring('bbbbb')) // 1
console.log(lengthOfLongestSubstring('pwwkew')) // 3
console.log(lengthOfLongestSubstring('')) // 0
console.log(lengthOfLongestSubstring(' ')) // 1
console.log(lengthOfLongestSubstring('aab')) // 2
console.log(lengthOfLongestSubstring('dvdf')) // 3
