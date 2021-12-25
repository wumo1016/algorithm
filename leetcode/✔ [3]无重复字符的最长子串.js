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
  let [len, rk, res, max] = [s.length, 0, [], []]
  for (let i = 0; i < len; i++) {
    const index = s.slice(rk, i).indexOf(s[i])
    if (index > -1) {
      if (max.length) {
        if (res[1] - res[0] > max[1] - max[0]) {
          max = res
        }
      } else {
        max = res
      }
      rk = index + rk + 1
    } else {
      res = [rk, i + 1]
    }
  }
  res = [rk, len]
  if (max.length < 1) return res[1] - res[0]
  return Math.max(res[1] - res[0], max[1] - max[0])
}

// console.log(lengthOfLongestSubstring('abcabcbb')) // 3
// console.log(lengthOfLongestSubstring('bbbbb')) // 1
console.log(lengthOfLongestSubstring('pwwkew')) // 3
// console.log(lengthOfLongestSubstring('')) // 0
// console.log(lengthOfLongestSubstring(' ')) // 1
// console.log(lengthOfLongestSubstring('aab')) // 2
// console.log(lengthOfLongestSubstring('dvdf')) // 3

// 优化版
function lengthOfLongestSubstring2(s) {
  let [len, rk, max] = [s.length, 0, 0]
  for (let i = 0; i < len; i++) {
    const p = s.slice(rk, i).indexOf(s[i])
    if (p > -1) {
      max = Math.max(i - rk, max)
      rk = p + rk + 1
    }
  }
  return Math.max(len - rk, max)
}

// 利用滑动窗口
// 定义一个右指针 如果没有重复元素 右指针后移 如果出现重复的 就从重复元素的后面继续后移
function lengthOfLongestSubstring3(s) {
  let [len, rk, max, set, cur] = [s.length, 0, 0, new Set()]
  for (let i = 0; i < len; ++i) {
    if (i > 0) set.delete(s.charAt(i - 1))
    while (rk < len && !set.has((cur = s.charAt(rk)))) {
      set.add(cur)
      rk++
    }
    max = Math.max(max, rk - i)
  }
  return max
}

// 移动右指针
function lengthOfLongestSubstring4(s) {
  let [len, l, max, set] = [s.length, 0, 0, new Set()]
  for (let r = 0; r < len; r++) {
    const val = s[r]
    while (set.has(val)) {
      set.delete(s[l++])
    }
    set.add(val)
    max = Math.max(max, r - l + 1)
  }
  return max
}

// 利用map储存指针
function lengthOfLongestSubstring(s) {
  let [len, l, max, map] = [s.length, 0, 0, new Map()]
  for (let r = 0; r < len; r++) {
    const val = s[r],
      target = map.get(val)
    if (map.has(val) && target >= l) l = target + 1
    map.set(val, r)
    max = Math.max(max, r - l + 1)
  }
  return max
}
