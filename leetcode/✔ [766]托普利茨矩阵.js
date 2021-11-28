/* 托普利茨矩阵(https://leetcode-cn.com/problems/toeplitz-matrix/)
- 给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false
- 如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 
*/

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
function isToeplitzMatrix(matrix) {
  const mLen = matrix.length
  const tLen = mLen + matrix[0].length - 1
  for (let index = 0; index < tLen; index++) {
    let res = []
    if (index < mLen - 1) {
      res = matrix.reduce((t, c, i) => {
        return i >= mLen - index - 1 ? t.concat(c.shift()) : t
      }, [])
    } else {
      res = matrix.reduce((t, c, i) => t.concat(c.shift()), [])
    }
    if ([...new Set(res)].length !== 1) {
      return false
    }
    matrix = matrix.filter(v => v.length)
  }
  return true
}

const data = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2]
]

console.log(isToeplitzMatrix(data))
console.log(isToeplitzMatrix1(data))

// 判断每一个元素与右下角是否相等即可 第一行最后一个和最后一行第一个无需判断
function isToeplitzMatrix1(matrix) {
  const m = matrix.length,
    n = matrix[0].length
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (matrix[i][j] != matrix[i + 1][j + 1]) {
        return false
      }
    }
  }
  return true
}
