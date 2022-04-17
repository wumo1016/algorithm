/* 最常见的单词(https://leetcode-cn.com/problems/most-common-word/)
- 给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。
- 题目保证至少有一个词不在禁用列表中，而且答案唯一。
- 禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。
- paragraph 只包含字母、空格和下列标点符号!?',;.
*/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
function mostCommonWord(paragraph, banned) {
  paragraph = paragraph.replace(/\!|\?|\'|\,|\;|\./g, ' ').trim()
  const map = new Map()
  paragraph.split(/\s+/).map(str => {
    str = str.toLocaleLowerCase()
    if (!banned.includes(str)) map.set(str, map.has(str) ? map.get(str) + 1 : 1)
  })
  let max = [0, 0]
  Array.from(map, ([key, value]) => {
    if (value > max[1]) max = [key, value]
  })
  return max[0]
}

console.log(
  mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', [
    'hit'
  ])
) // "ball"
console.log(mostCommonWord('Bob. hIt, baLl', ['bob', 'hit'])) // "ball"
