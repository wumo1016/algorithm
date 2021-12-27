/* 最小覆盖子串(https://leetcode-cn.com/problems/minimum-window-substring/)
- 返回s中涵盖t所有字符的最小子串
- 如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
- 字串只需要包含 不需要桉顺序包含 二次重复的字符也算单独一个
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  let [len1, len2, l, r, map] = [s.length, t.length, 0, 0, new Map()]
  for (let i = 0; i < len2; i++) {
    const val = t[i]
    map.set(val, (map.get(val) || 0) + 1)
  }
  let [res, min, needNum] = [[0, 0], Infinity, map.size]
  while (r < len1) {
    const v = s[r]
    if (map.has(v)) {
      map.set(v, map.get(v) - 1)
      if (map.get(v) === 0) needNum--
    }
    while (needNum === 0) {
      if (r - l < min) {
        min = r - l
        res = [l, r + 1]
      }
      const v = s[l]
      if (map.has(v)) {
        map.set(v, map.get(v) + 1)
        if (map.get(v) === 1) needNum++
      }
      l++
    }
    r++
  }
  return s.slice(res[0], res[1])
}

console.log(minWindow('ADOBECODEBANC', 'ABC')) // "BANC"
// console.log(minWindow('a', 'a')) // "a"
// console.log(minWindow('a', 'aa')) // ""
// console.log(minWindow('cabwefgewcwaefgcf', 'cae')) // "cwae"

function minWindow(s, t) {
  const [len, map] = [s.length, new Map()]
  for (const v of t) {
    map.set(v, map.has(v) ? map.get(v) + 1 : 1)
  }
  let [left, right, size, res, min] = [0, 0, map.size, [0, 0], Infinity]
  for (let i = 0; i < len; i++) {
    const v = s[right]
    if (map.has(v)) {
      map.set(v, map.get(v) - 1)
      if (map.get(v) === 0) size--
    }
    while (size === 0) {
      const v = s[left]
      if (right - left < min) {
        min = right - left
        res = [left, right + 1]
      }
      if (map.has(v)) {
        map.set(v, map.get(v) + 1)
        if (map.get(v) === 1) size++
      }
      left++
    }
    right++
  }
  return s.slice(res[0], res[1])
}
