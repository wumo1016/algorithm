/* 最后一个单词的长度(https://leetcode-cn.com/problems/length-of-last-word/description/)
- 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。
- 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串
*/

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  return s.match(/(\S*)\s*$/)[1].length
}

console.log(lengthOfLastWord('Hello World')) // 5
console.log(lengthOfLastWord('   fly me   to   the moon  ')) // 4
console.log(lengthOfLastWord('luffy is still joyboy')) // 6
