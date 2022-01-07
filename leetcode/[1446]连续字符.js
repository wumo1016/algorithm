/* 连续字符(https://leetcode-cn.com/problems/consecutive-characters/)
- 给你一个字符串
- 返回最长重复子串的长度
- s 只包含小写英文字母
- 1 <= s.length <= 500
*/

/**
 * @param {string} s
 * @return {number}
 */
function maxPower(s) {
  let [max, num, cur] = [1, 0]
  for (const v of s) {
    v === cur ? num++ : ([max, num, cur] = [Math.max(max, num), 1, v])
  }
  return Math.max(max, num)
}

console.log(maxPower('leetcode')) // 2
console.log(maxPower('abbcccddddeeeeedcba')) // 5
console.log(maxPower('triplepillooooow')) // 5
console.log(maxPower('hooraaaaaaaaaaay')) // 11
console.log(maxPower('tourist')) // 1
console.log(maxPower('cc')) // 2
