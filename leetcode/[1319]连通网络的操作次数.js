/* 连通网络的操作次数(https://leetcode-cn.com/problems/number-of-operations-to-make-network-connected/description/)
- 用以太网线缆将 n 台计算机连接成一个网络，计算机的编号从 0 到 n-1。
- 线缆用 connections 表示，其中 connections[i] = [a, b] 连接了计算机 a 和 b。
-- 给你这个计算机网络的初始布线 connections，你可以拔开任意两台直连计算机之间的线缆，并用它连接一对未直连的计算机。
- 请你计算并返回使所有计算机都连通所需的最少操作次数。如果不可能，则返回 -1 。
*/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
function makeConnected(n, connections) {}

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
