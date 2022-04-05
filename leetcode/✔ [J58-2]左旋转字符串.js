/* 左旋转字符串(https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/)
- 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部
- 请定义一个函数实现字符串左旋转操作的功能
- 比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"
- 1 <= k < s.length <= 10000
*/

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
function reverseLeftWords(s, n) {
  return s.slice(n) + s.slice(0, n)
}

console.log(reverseLeftWords('abcdefg', 2)) //  "cdefgab"
console.log(reverseLeftWords('lrloseumgh', 6)) // "umghlrlose"
