/* 两句话中的不常见单词(https://leetcode-cn.com/problems/uncommon-words-from-two-sentences/)
- 句子 是一串由空格分隔的单词。每个 单词 仅由小写字母组成
- 如果某个单词在其中一个句子中恰好出现一次，在另一个句子中却 没有出现 ，那么这个单词就是 不常见的 
- 给你两个 句子 s1 和 s2 ，返回所有 不常用单词 的列表
- 返回列表中单词可以按 任意顺序 组织
- 1 <= s1.length, s2.length <= 200
- s1 和 s2 由小写英文字母和空格组成
- s1 和 s2 都不含前导或尾随空格
- s1 和 s2 中的所有单词间均由单个空格分隔
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
function uncommonFromSentences(s1, s2) {
  const [res1, res2] = [s1.split(' '), s2.split(' ')]
  return [...new Set([...res1, ...res2])].filter(
    v =>
      (res1.includes(v) &&
        res1.indexOf(v) === res1.lastIndexOf(v) &&
        !res2.includes(v)) ||
      (res2.includes(v) &&
        res2.indexOf(v) === res2.lastIndexOf(v) &&
        !res1.includes(v))
  )
}

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour')) // ["sweet","sour"]
console.log(uncommonFromSentences('apple apple', 'banana')) // ["banana"]

function uncommonFromSentences(s1, s2) {
  const res = [...s1.split(' '), ...s2.split(' ')]
  return [...new Set(res)].filter(v => res.indexOf(v) === res.lastIndexOf(v))
}

// 利用哈希表
function uncommonFromSentences(s1, s2) {
  const map = new Map()
  for (const val of s1.split(' ')) {
    map.set(val, (map.get(val) || 0) + 1)
  }
  for (const val of s2.split(' ')) {
    map.set(val, (map.get(val) || 0) + 1)
  }
  const res = []
  map.forEach((value, key) => {
    if (value === 1) res.push(key)
  })
  return res
}
