/* 反转字符串中的单词 III(https://leetcode.cn/problems/reverse-words-in-a-string-iii/)
- 给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
- 1 <= s.length <= 5 * 104
*/

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  const reverse = str => str.split('').reverse().join('')
  return s
    .split(' ')
    .map(v => reverse(v))
    .join(' ')
}
console.log(reverseWords("Let's take LeetCode contest")) // "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords('God Ding')) // "doG gniD"

function reverseWords(s) {
  let [len, i, res] = [s.length, 0, '']
  while (i < len) {
    let start = i
    while (i < len && s[i] !== ' ') i++
    for (let j = i - 1; j >= start; j--) {
      res += s[j]
    }
    while (s[i] === ' ') (res += ' '), i++
  }
  return res
}
