/* 螺旋矩阵(https://leetcode.cn/problems/spiral-matrix/)
- 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素
- 1 <= m, n <= 10
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  const [m, n, res] = [matrix.length, matrix[0].length, []]
  let [top, right, bottom, left] = [0, n - 1, m - 1, 0]
  const loop = direction => {
    if (direction === 'top') {
      for (let i = left; i <= right; i++) {
        res.push(matrix[top][i])
      }
      top++
      if (top <= bottom) loop('right')
    } else if (direction === 'right') {
      for (let i = top; i <= bottom; i++) {
        res.push(matrix[i][right])
      }
      right--
      if (left <= right) loop('bottom')
    } else if (direction === 'bottom') {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i])
      }
      bottom--
      if (top <= bottom) loop('left')
    } else if (direction === 'left') {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left])
      }
      left++
      if (left <= right) loop('top')
    }
  }
  loop('top')
  return res
}

// console.log(
//   spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ])
// ) // [1,2,3,6,9,8,7,4,5]

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ])
) // [1,2,3,4,8,12,11,10,9,5,6,7]
