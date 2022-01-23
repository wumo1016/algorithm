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
console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ])
) // 3

// 并查集
function numIslands(grid) {
  class UnionSet {
    constructor(n = 100) {
      this.n = n
      this.father = new Array(n)
      this.init(n)
    }
    init(n) {
      for (let i = 0; i < n; i++) this.father[i] = i
    }
    find(x) {
      return (this.father[x] =
        this.father[x] == x ? x : this.find(this.father[x]))
    }
    merge(a, b) {
      const fa = this.find(a) // a的根节点
      const fb = this.find(b) // b的根节点
      if (fa === fb) return false // 已经在一个集合中
      this.father[fa] = fb
      return true
    }
  }

  let row = grid.length
  let col = grid[0].length
  const u = new UnionSet(row * col)
  let count = 0

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == '0') continue
      count++
      // 右
      if (j + 1 < col && grid[i][j + 1] == '1') {
        u.merge(i * col + j, i * col + j + 1) && count--
      }
      // 下
      if (i + 1 < row && grid[i + 1][j] == '1') {
        u.merge(i * col + j, (i + 1) * col + j) && count--
      }
    }
  }

  return count
}
