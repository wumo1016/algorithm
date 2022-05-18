/* 两数之和(https://leetcode-cn.com/problems/two-sum/)
- 给你两个字符串 word1 和 word2 
- 请你从 word1 开始，通过交替添加字母来合并字符串
- 如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾
- 返回 合并后的字符串
- 1 <= word1.length, word2.length <= 100
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1, word2) {
  let [len1, len2, i1, i2, res] = [word1.length, word2.length, 0, 0, '']
  while (i1 < len1 && i2 < len2) {
    res += word1[i1++] + word2[i2++]
  }
  return (res += word1.slice(i1) + word2.slice(i2))
}

console.log(mergeAlternately('abc', 'pqr')) // "apbqcr"
console.log(mergeAlternately('ab', 'pqrs')) // "apbqrs"
console.log(mergeAlternately('abcd', 'pq')) // "apbqcd"
