/* 反转单词前缀(https://leetcode.cn/problems/reverse-prefix-of-word/)
- 给你一个下标从 0 开始的字符串 word 和一个字符 ch 。
- 找出 ch 第一次出现的下标 i ，反转 word 中从下标 0 开始、直到下标 i 结束（含下标 i ）的那段字符。
- 如果 word 中不存在字符 ch ，则无需进行任何操作。
*/

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
function reversePrefix(word, ch) {
  let res = ''
  for (let i = 0, len = word.length; i < len; i++) {
    res = word[i] + res
    if (word[i] === ch) return res + word.slice(i + 1)
  }
  return word
}

console.log(reversePrefix('abcdefd', 'd')) // "dcbaefd"
console.log(reversePrefix('xyxzxe', 'z')) // "zxyxxe"

function reversePrefix(word, ch) {
  let index = word.indexOf(ch)
  if (index > -1) {
    let [l, r, list] = [0, index, [...word]]
    while (l < r) {
      ;[list[l], list[r]] = [list[r], list[l]]
      l++, r--
    }
    word = list.join('')
  }
  return word
}
