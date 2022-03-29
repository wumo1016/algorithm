/* 字符串中的第一个唯一字符(https://leetcode-cn.com/problems/first-unique-character-in-a-string/)
- 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1
*/

/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  const [len, map] = [s.length, new Map()]
  for (let i = 0; i < len; i++) {
    map.set(s[i], map.has(s[i]) ? -1 : i)
  }
  for (const [key, value] of map) {
    if (value >= 0) return value
  }
  return -1
}

console.log(firstUniqChar('leetcode')) // 0
console.log(firstUniqChar('loveleetcode')) // 2
console.log(firstUniqChar('aabb')) // -1

function firstUniqChar(s) {
  for (const val of s) {
    if (s.indexOf(val) === s.lastIndexOf(val)) return s.indexOf(val)
  }
  return -1
}

function firstUniqChar(s) {
  console.log(_.countBy(s));
}
