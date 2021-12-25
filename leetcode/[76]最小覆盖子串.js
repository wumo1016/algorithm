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
function minWindow(s, t) {}

console.log(minWindow('ADOBECODEBANC', 'ABC')) // "BANC"
console.log(minWindow('a', 'a')) // "a"
console.log(minWindow('a', 'aa')) // ""
