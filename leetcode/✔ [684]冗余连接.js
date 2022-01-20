/* 冗余连接(https://leetcode-cn.com/problems/redundant-connection/description/)
- 树可以看成是一个连通且 无环 的 无向 图。
- 给定往一棵 n 个节点 (节点值 1～n) 的树中添加一条边后的图。
- 添加的边的两个顶点包含在 1 到 n 中间，且这条附加的边不属于树中已存在的边。
- 图的信息记录于长度为 n 的二维数组 edges ，edges[i] = [ai, bi] 表示图中在 ai 和 bi 之间存在一条边。
- 请找出一条可以删去的边，删除后可使得剩余部分是一个有着 n 个节点的树。如果有多个答案，则返回数组 edges 中最后出现的边。
- 3 <= n <= 1000
*/

class UnionSet {
  constructor(n = 100) {
    this.father = Array(n)
      .fill()
      .map((_, i) => i)
  }
  find(i) {
    return this.father[i] === i ? i : this.find(this.father[i])
  }
  merge(x, y) {
    const [m, n] = [this.find(x - 1), this.find(y - 1)]
    if (m === n) return false
    this.father[m] = n
    return true
  }
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
// 将联通的看成一个集合 如果两个节点存在同一个几个中 就是多余的
function findRedundantConnection(edges) {
  const list = []
  let res
  edges.forEach(value => {
    const [x, y] = value
    const indexX = list.findIndex(v => v.has(x))
    const indexY = list.findIndex(v => v.has(y))
    if (indexX > -1 && indexY > -1) {
      if (indexX === indexY) {
        res = value
      } else {
        list[indexX] = new Set([...list[indexX], ...list[indexY]])
        list.splice(indexY, 1)
      }
    } else if (indexX > -1) {
      list[indexX].add(y)
    } else if (indexY > -1) {
      list[indexY].add(x)
    } else {
      list.push(new Set(value))
    }
  })
  return res
}

// 并查集
function findRedundantConnection(edges) {
  let [us, res] = [new UnionSet(1000)]
  for (const value of edges) {
    if (!us.merge(...value)) res = value
  }
  return res
}

console.log(
  findRedundantConnection([
    [1, 2],
    [1, 3],
    [2, 3]
  ])
) // [2,3]
console.log(
  findRedundantConnection([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
    [1, 5]
  ])
) // [1,4]
console.log(
  findRedundantConnection([
    [9, 10],
    [5, 8],
    [2, 6],
    [1, 5],
    [3, 8],
    [4, 9],
    [8, 10],
    [4, 10],
    [6, 8],
    [7, 9]
  ])
) // [4,10]
