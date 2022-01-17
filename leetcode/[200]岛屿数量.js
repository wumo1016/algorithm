/* 岛屿数量(https://leetcode-cn.com/problems/number-of-islands/description/)
- 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
- 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成
- 此外，你可以假设该网格的四条边均被水包围
- 1 <= m, n <= 300
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  const [mLen, nLen] = [grid.length, grid[0].length]
  function setZero(i, j) {
    if (i < 0 || j < 0 || i >= mLen || j >= nLen || grid[i][j] === '0') return
    grid[i][j] = '0'
    setZero(i - 1, j)
    setZero(i, j + 1)
    setZero(i + 1, j)
    setZero(i, j - 1)
  }
  let res = 0
  for (let i = 0; i < mLen; i++) {
    for (let j = 0; j < nLen; j++) {
      if (grid[i][j] === '1') {
        setZero(i, j)
        res++
      }
    }
  }
  return res
}

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ])
) // 1
console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ])
) // 3
