/* 字符串压缩(https://leetcode.cn/problems/compress-string-lcci/)
- 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
- 若“压缩”后的字符串没有变短，则返回原先的字符串。
- 你可以假设字符串中只包含大小写英文字母（a至z）
*/

/**
 * @param {string} S
 * @return {string}
 */
function compressString(S) {
  let [res, len, prev] = ['', S.length, S[0]]
  if (len < 2) return S
  for (let i = 1; i < len; i++) {
    let num = 1
    while (prev === S[i]) {
      num++
      i++
    }
    res += prev + num
    prev = S[i]
  }
  if (prev) res += prev + 1
  return res.length < len ? res : S
}

console.log(compressString('aabcccccaaa')) // "a2b1c5a3"
console.log(compressString('abbccd')) // "abbccd"
console.log(compressString('bbbac')) // "bbbac"
