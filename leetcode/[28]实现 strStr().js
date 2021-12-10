/* 实现 strStr()(https://leetcode-cn.com/problems/implement-strstr/description/)
- 给你两个字符串 haystack 和 needle
- 请你在 haystack 字符串中找出 needle 字符串出现的第一个位置 下标从0开始
- 如果不存在，则返回 -1
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr1(haystack, needle) {
  if (haystack === needle) return 0
  const [hLen, nLen] = [haystack.length, needle.length]
  if (nLen === 0) return 0
  for (let i = 0; i < hLen && hLen - i >= nLen; i++) {
    if (haystack[i] === needle[0] && haystack.slice(i, i + nLen) === needle)
      return i
  }
  return -1
}

console.log(strStr('hello', 'll')) // 2
// console.log(strStr('aaaaa', 'bba')) // -1
// console.log(strStr('', '')) // 0

// KMP算法 https://leetcode-cn.com/problems/implement-strstr/solution/kmpsuan-fa-js-by-xxxx__-fgi5/
function strStr(haystack, needle) {
  const n = haystack.length,
    m = needle.length
  if (m === 0) {
    return 0
  }
  const pi = new Array(m).fill(0)
  for (let i = 1, j = 0; i < m; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = pi[j - 1]
    }
    if (needle[i] == needle[j]) {
      j++
    }
    pi[i] = j
  }
  for (let i = 0, j = 0; i < n; i++) {
    while (j > 0 && haystack[i] != needle[j]) {
      j = pi[j - 1]
    }
    if (haystack[i] == needle[j]) {
      j++
    }
    if (j === m) {
      return i - m + 1
    }
  }
  return -1
}
