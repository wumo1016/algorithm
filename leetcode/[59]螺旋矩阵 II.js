/* 螺旋矩阵(https://leetcode.cn/problems/spiral-matrix/)
- 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix
- 1 <= n <= 20
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
  const res = Array(n)
    .fill()
    .map(v => Array(n).fill(0))
  let [top, right, bottom, left, val] = [0, n - 1, n - 1, 0, 1]
  const loop = direction => {
    if (direction === 'top') {
      for (let i = left; i <= right; i++) {
        res[top][i] = val++
      }
      top++
      if (top <= bottom) loop('right')
    } else if (direction === 'right') {
      for (let i = top; i <= bottom; i++) {
        res[i][right] = val++
      }
      right--
      if (left <= right) loop('bottom')
    } else if (direction === 'bottom') {
      for (let i = right; i >= left; i--) {
        res[bottom][i] = val++
      }
      bottom--
      if (top <= bottom) loop('left')
    } else if (direction === 'left') {
      for (let i = bottom; i >= top; i--) {
        res[i][left] = val++
      }
      left++
      if (left <= right) loop('top')
    }
  }
  loop('top')
  return res
}

console.log(generateMatrix(3)) // [[1,2,3],[8,9,4],[7,6,5]]
