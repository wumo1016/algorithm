/* 省份数量(https://leetcode-cn.com/problems/number-of-provinces/description/)
- 有 n 个城市，其中一些彼此相连，另一些没有相连
- 如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。
- 省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市
- 给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连
- 返回矩阵中 省份 的数量
- 1 <= n <= 200
*/

class UnionSet {
  constructor(n = 100) {
    this.size = n
    this.father = Array(n)
      .fill()
      .map((_, i) => i)
  }
  find(i) {
    return this.father[i] === i ? i : this.find(this.father[i])
  }
  merge(x, y) {
    const [m, n] = [this.find(x), this.find(y)]
    if (m === n) return
    this.father[m] = n
    this.size--
  }
}

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
function findCircleNum(isConnected) {
  // 是否相交
  function isIntersect(m, n) {
    return new Set([...m, ...n]).size < m.length + n.length
  }
  // 转化为邻接表
  const map = new Map()
  isConnected.forEach((list, i) => {
    map.set(i, [])
    list.forEach((v, j) => {
      if (i !== j && v) {
        map.set(i, map.get(i).concat(j))
      }
    })
  })
  // 寻找互相重复的部分
  const res = []
  map.forEach((list, key) => {
    let cur = [key, ...list]
    let index
    while ((index = res.findIndex(v => isIntersect(cur, v))) > -1) {
      cur = [...new Set([...cur, ...res[index]])]
      res.splice(index, 1)
    }
    res.push(cur)
  })
  return res.length
}

// 并查集
function findCircleNum(isConnected) {
  const len = isConnected.length,
    us = new UnionSet(len)
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (isConnected[i][j]) us.merge(i, j)
    }
  }
  return us.size
}

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
  ])
) // 2
console.log(
  findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ])
) // 3
console.log(
  findCircleNum([
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 1, 1]
  ])
) // 1
