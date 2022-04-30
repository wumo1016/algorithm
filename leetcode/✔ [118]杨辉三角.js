/* 杨辉三角(https://leetcode-cn.com/problems/pascals-triangle/)
- 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
- 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  const loop = res => {
    const cur = [1]
    if (res.length > 0) {
      const last = res[res.length - 1]
      for (let i = 0, len = last.length - 1; i < len; i++) {
        cur.push(last[i] + last[i + 1])
      }
      cur.push(1)
    }
    res.push(cur)
    if (res.length === numRows) return res
    return loop(res)
  }
  return loop([])
}

console.log(generate(5)) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)) // [[1]]

function generate(numRows) {
  const res = []
  for (let i = 0; i < numRows; i++) {
    const row = Array(i + 1).fill(1)
    for (let j = 1, last = res.at(-1); j < i; j++) {
      row[j] = last[j] + last[j - 1]
    }
    res.push(row)
  }
  return res
}
