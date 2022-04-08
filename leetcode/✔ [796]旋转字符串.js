/* 旋转字符串(https://leetcode-cn.com/problems/rotate-string/)
- 给定两个字符串, s 和 goal
- 如果在若干次旋转操作之后，s 能变成 goal ，那么返回 true
- s 的 旋转操作 就是将 s 最左边的字符移动到最右边
- 1 <= s.length, goal.length <= 100
*/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
function rotateString(s, goal) {
  const len = s.length
  if (len !== goal.length) return false
  for (let i = 0, cur = s[i]; i < len; i++, cur += s[i]) {
    if (s.slice(i + 1) + cur === goal) return true
  }
  return false
}

console.log(rotateString('abcde', 'cdeab')) // true
console.log(rotateString('abcde', 'abced')) // false

// 搜索字符串
function rotateString(s, goal) {
  return s.length === goal.length && (s + s).includes(goal)
}
