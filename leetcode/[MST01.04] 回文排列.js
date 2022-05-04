/* 回文排列(https://leetcode-cn.com/problems/palindrome-permutation-lcci/)
- 给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一
- 回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列
- 回文串不一定是字典当中的单词。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
function canPermutePalindrome(s) {
  const obj = {}
  for (const val of s) {
    obj[val] = (obj[val] || 0) + 1
  }
  return Object.values(obj).filter(v => v % 2 === 1).length < 2
}

console.log(canPermutePalindrome('AaBb//a')) // false （排列有"tacocat"、"atcocta"，等等

function canPermutePalindrome(s) {
  const set = new Set()
  for (const val of s) {
    set.has(val) ? set.delete(val) : set.add(val)
  }
  return set.size === 1 || set.size === 0
}
