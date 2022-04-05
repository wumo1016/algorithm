/* 翻转单词顺序(https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/)
- 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变
- 为简单起见，标点符号和普通字母一样处理
- 例如输入字符串"I am a student. "，则输出"student. a am I"。
*/

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(' ')
}

console.log(reverseWords('the sky is blue')) // blue is sky the
console.log(reverseWords('  hello world!  ')) // "world! hello"
console.log(reverseWords('a good   example')) // "example good a"
