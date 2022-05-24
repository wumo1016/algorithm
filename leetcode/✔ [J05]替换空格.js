/* 替换空格(https://leetcode.cn/problems/ti-huan-kong-ge-lcof/)
- 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
*/

/**
 * @param {string} s
 * @return {string}
 */
function replaceSpace(s) {
  return s.replaceAll(' ', '%20')
}

console.log(replaceSpace('We are happy.')) // "We%20are%20happy."

// 双指针倒序修改
function replaceSpace(s) {
  s = s.split('')
  let [count, len] = [0, s.length]
  for (const val of s) {
    if (val === ' ') count++
  }
  const rLen = len + count * 2
  s.length += rLen
  for (let i = len - 1, j = rLen - 1; i >= 0, j >= 0; i--) {
    if (s[i] !== ' ') {
      s[j--] = s[i]
    } else {
      s[j--] = '0'
      s[j--] = '2'
      s[j--] = '%'
    }
  }
  return s.join('')
}
