/* Z 字形变换(https://leetcode-cn.com/problems/zigzag-conversion/description/)
- 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I
*/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (numRows === 1) return s
  let len = s.length,
    i = 0,
    res = []
  const getList = () => Array(numRows).fill('')
  while (i < len) {
    for (let j = 0; j < numRows - 1 && i < len; j++) {
      let l = getList()
      if (j === 0) {
        let m = 0
        while (m < numRows && i < len) {
          l[m] = s[i++]
          m++
        }
      } else {
        l[numRows - 1 - j] = s[i++]
      }
      res.push(l)
    }
  }
  let str = ''
  for (let i = 0; i < numRows; i++) {
    str += res.map(v => v[i]).join('')
  }
  return str
}

console.log(convert('PAYPALISHIRING', 3)) // PAHNAPLSIIGYIR
console.log(convert('PAYPALISHIRING', 4)) // PINALSIGYAHRPI
console.log(convert('A', 1)) // A
