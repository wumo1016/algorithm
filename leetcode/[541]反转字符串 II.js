/* 反转字符串 II(https://leetcode-cn.com/problems/reverse-string-ii/)
- 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
- 如果剩余字符少于 k 个，则将剩余字符全部反转。
- 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
- 1 <= s.length <= 104
- 1 <= k <= 104
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function reverseStr(s, k) {
  let [res, len, i, tk] = ['', s.length, 0, tk]
  while (i + tk <= len) {
    let cur = ''
    let j = i + k - 1
    while (j >= i) {
      cur += s[j--]
    }
    res += cur
    j = i + k
    while (j < i + tk) {
      res += s[j++]
    }
    i = i + tk
  }
  if (i + k <= len) {
    const t = i + k
    let cur = ''
    while (i < t) {
      cur = s[i++] + cur
    }
    res += cur
    while (i < len) {
      res += s[i++]
    }
  } else {
    let cur = ''
    while (i < len) {
      cur = s[i++] + cur
    }
    res += cur
  }
  return res
}

console.log(reverseStr('abcdhijk', 2)) // "bacdihjk"
console.log(reverseStr('abcdefg', 2)) // "bacdfeg"
console.log(reverseStr('abcdefg', 8)) // "gfedcba"
console.log(reverseStr('abcdefg', 3)) // "cbadefg"

// 字符串优化版
function reverseStr(s, k) {
  let [res, len, i, tk] = ['', s.length, 0, 2 * k]
  while (i < len) {
    let [cur, t, r] = ['', i + tk, i + k]
    while (r < t && i < len) {
      cur = s[i++] + cur + (s[r++] || '')
    }
    res += cur
    i = t
  }
  return res
}
// 数组
function reverseStr(s, k) {
  let [len, list, i] = [s.length, s.split(''), 0]
  while (i < len) {
    let r = Math.min(i + k, len) - 1,
      t = i + 2 * k
    while (i < r) {
      ;[list[i], list[r]] = [list[r], list[i]]
      i++
      r--
    }
    i = t
  }
  return list.join('')
}
// 数组优化版
function reverseStr(s, k) {
  let [len, list, kw] = [s.length, s.split(''), 2 * k]
  for (let i = 0; i < len; i += kw) {
    let [l, r] = [i - 1, Math.min(i + k, len)]
    while (++l < --r) [list[l], list[r]] = [list[r], list[l]]
  }
  return list.join('')
}
