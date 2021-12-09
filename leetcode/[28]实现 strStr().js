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
function strStr(haystack, needle) {
  if (haystack === needle) return 0
  const [hLen, nLen] = [haystack.length, needle.length]
  for (let i = 0; i < hLen && hLen - i >= nLen; i++) {
    if (haystack.slice(i, i + nLen) === needle) return i
  }
  return -1
}

console.log(strStr('hello', 'll')) // 2
console.log(strStr('aaaaa', 'bba')) // -1
console.log(strStr('', '')) // 0
