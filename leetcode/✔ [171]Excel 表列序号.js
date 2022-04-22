/* Excel 表列序号(https://leetcode-cn.com/problems/excel-sheet-column-number/)
- 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称
- 返回 该列名称对应的列序号
- 1 <= columnTitle.length <= 7
- columnTitle 仅由大写英文组成
- columnTitle 在范围 ["A", "FXSHRXW"] 内
*/

/**
 * @param {string} columnTitle
 * @return {number}
 */
function titleToNumber(columnTitle) {
  let res = 0
  for (let i = 0, len = columnTitle.length; i < len; i++) {
    res += (columnTitle[i].charCodeAt() - 64) * Math.pow(26, len - i - 1)
  }
  return res
}

console.log(titleToNumber('A')) // 1
console.log(titleToNumber('AB')) // 28
console.log(titleToNumber('ZY')) // 701
