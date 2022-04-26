/* 比较字符串最小字母出现频次(https://leetcode-cn.com/problems/compare-strings-by-frequency-of-the-smallest-character/)
- 定义一个函数 f(s)，统计 s  中（按字典序比较）最小字母的出现频次 ，其中 s 是一个非空字符串
1 <= queries.length <= 2000
1 <= words.length <= 2000
1 <= queries[i].length, words[i].length <= 10
*/

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
function numSmallerByFrequency(queries, words) {
  const getNum = str => {
    let res = ['z', 0]
    for (const s of str) {
      if (s < res[0]) {
        res = [s, 1]
      } else if (s === res[0]) {
        res[1]++
      }
    }
    return res[1]
  }
  words = words.map(getNum)
  return queries.map(q => words.filter(num => getNum(q) < num).length)
}

console.log(numSmallerByFrequency(['cbd'], ['zaaaz'])) // [1]
console.log(numSmallerByFrequency(['bbb', 'cc'], ['a', 'aa', 'aaa', 'aaaa'])) // [1,2]
