/* 太平洋大西洋水流问题(https://leetcode-cn.com/problems/pacific-atlantic-water-flow/)
- 给定一个 m x n 的非负整数矩阵来表示一片大陆上各个单元格的高度
- 太平洋”处于大陆的左边界和上边界，而“大西洋”处于大陆的右边界和下边界。
- 规定水流只能按照上、下、左、右四个方向流动，且只能从高到低或者在同等高度上流动
- 请找出那些水流既可以流动到“太平洋”，又能流动到“大西洋”的陆地单元的坐标
*/

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
function pacificAtlantic(heights) {
  if (!heights || !heights[0]) return []
  const [m, n] = [heights.length, heights[0].length]
  const tMatrix = Array.from({ length: m }, () => Array(n).fill(false)) // 太平洋矩阵
  const dMatrix = Array.from({ length: m }, () => Array(n).fill(false)) // 大西洋矩阵
  const dfs = (r, c, matrix) => {
    matrix[r][c] = true
    // 上下左右四个方向流动 r c 表示第x行第y列
    ;[
      [r - 1, c],
      [r, c + 1],
      [r + 1, c],
      [r, c - 1]
    ].forEach(([nr, nc]) => {
      if (
        nr >= 0 && // 设置边界
        nr < m &&
        nc >= 0 &&
        nc < n &&
        heights[nr][nc] >= heights[r][c] && // 逆流而上
        !matrix[nr][nc] // 避免死循环
      ) {
        dfs(nr, nc, matrix)
      }
    })
  }
  // 以上下左右四个边界线 逆流而上的方式 往里推进 分别找到能留到太平洋或大西洋的坐标
  // 左边界线和右边界线
  for (let r = 0; r < m; r++) {
    dfs(r, 0, tMatrix) // 太平洋左边界
    dfs(r, n - 1, dMatrix) // 大西洋
  }
  // 上边界线和下边界线
  for (let c = 0; c < n; c++) {
    dfs(0, c, tMatrix) // 太平洋上边界
    dfs(m - 1, c, dMatrix) // 大西洋
  }
  const res = []
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (tMatrix[r][c] && dMatrix[r][c]) res.push([r, c])
    }
  }
  return res
}

const data = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4]
]
console.log(pacificAtlantic(data)) // [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]
