/* 连通网络的操作次数(https://leetcode-cn.com/problems/number-of-operations-to-make-network-connected/description/)
- 用以太网线缆将 n 台计算机连接成一个网络，计算机的编号从 0 到 n-1。
- 线缆用 connections 表示，其中 connections[i] = [a, b] 连接了计算机 a 和 b。
-- 给你这个计算机网络的初始布线 connections，你可以拔开任意两台直连计算机之间的线缆，并用它连接一对未直连的计算机。
- 请你计算并返回使所有计算机都连通所需的最少操作次数。如果不可能，则返回 -1 。
*/

class QuickUnion {
  constructor(n = 100) {
    this.n = n
    this.father = Array(n)
    this.init()
  }
  // 将每个节点的颜色初始化为自身颜色
  init() {
    for (let i = 0; i < this.n; i++) {
      this.father[i] = i
    }
  }
  // 查找
  find(i) {
    if (this.father[i] === i) return i
    return this.find(this.father[i])
  }
  // 是否是同一集合
  same(x, y) {
    return this.find(x) === this.find(y)
  }
  // 合并
  merge(x, y) {
    const m = this.find(x)
    const n = this.find(y)
    if (m === n) return true
    this.father[m] = n
  }
}

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
function makeConnected(n, connections) {
  const quickUnion = new QuickUnion(n)
  let num = 0 // 有多少多余的线缆
  for (const value of connections) {
    if (quickUnion.merge(value[0], value[1])) num++
  }
  // 需要联通的线缆数
  const need =
    [
      ...new Set(
        Array(n)
          .fill('')
          .map((_, i) => quickUnion.find(i))
      )
    ].length - 1
  return need <= num ? need : -1
}

console.log(
  makeConnected(4, [
    [0, 1],
    [0, 2],
    [1, 2]
  ])
) // 1
console.log(
  makeConnected(6, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3]
  ])
) // 2
console.log(
  makeConnected(6, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2]
  ])
) // -1
console.log(
  makeConnected(5, [
    [0, 1],
    [0, 2],
    [3, 4],
    [2, 3]
  ])
) // 0
