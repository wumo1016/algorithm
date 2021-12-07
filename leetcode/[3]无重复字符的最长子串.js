/* 无重复字符的最长子串(https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)
- 给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度
*/

/**
 * @param {string} s
 * @return {number}
 * 记录一个开始位置 然后记录当前的无重复子字符串
 * 一旦出现重复的 拿到当前的长度与缓存的最大长度对比 如果比缓存的大 则替换缓存的
 * 然后开始位置 是当前无重复子字符串的第一个向后移一位
 */
function lengthOfLongestSubstring1(s) {
  let [len, start, res, max] = [s.length, 0, [], []]
  for (let i = 0; i < len; i++) {
    const index = s.slice(start, i).indexOf(s[i])
    if (index > -1) {
      if (max.length) {
        if (res[1] - res[0] > max[1] - max[0]) {
          max = res
        }
      } else {
        max = res
      }
      start = index + start + 1
    } else {
      res = [start, i + 1]
    }
  }
  res = [start, len]
  if (max.length < 1) return res[1] - res[0]
  return Math.max(res[1] - res[0], max[1] - max[0])
}

console.log(lengthOfLongestSubstring('abcabcbb')) // 3
console.log(lengthOfLongestSubstring('bbbbb')) // 1
console.log(lengthOfLongestSubstring('pwwkew')) // 3
console.log(lengthOfLongestSubstring('')) // 0
console.log(lengthOfLongestSubstring(' ')) // 1
console.log(lengthOfLongestSubstring('aab')) // 2
console.log(lengthOfLongestSubstring('dvdf')) // 3

// 优化版
function lengthOfLongestSubstring2(s) {
  let [len, start, max] = [s.length, 0, 0]
  for (let i = 0; i < len; i++) {
    const p = s.slice(start, i).indexOf(s[i])
    if (p > -1) {
      max = Math.max(i - start, max)
      start = p + start + 1
    }
  }
  return Math.max(len - start, max)
}

// 利用滑动窗口
function lengthOfLongestSubstring(s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set()
  const n = s.length
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1,
    ans = 0
  for (let i = 0; i < n; ++i) {
    if (i != 0) {
      // 左指针向右移动一格，移除一个字符
      occ.delete(s.charAt(i - 1))
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      occ.add(s.charAt(rk + 1))
      ++rk
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1)
  }
  return ans
}
