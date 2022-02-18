/* 找出星型图的中心节点(https://leetcode-cn.com/problems/find-center-of-star-graph/)
- 有一个无向的 星型 图，由 n 个编号从 1 到 n 的节点组成。星型图有一个 中心 节点，并且恰有 n - 1 条边将中心节点与其他每个节点连接起来。
- 给你一个二维整数数组 edges ，其中 edges[i] = [ui, vi] 表示在节点 ui 和 vi 之间存在一条边。
- 请你找出并返回 edges 所表示星型图的中心节点。
- 3 <= n <= 105
*/

/**
 * @param {number[][]} edges
 * @return {number}
 */
function findCenter(edges) {
  return edges[1].includes(edges[0][0]) ? edges[0][0] : edges[0][1]
}

console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2]
  ])
) // 2
console.log(
  findCenter([
    [1, 2],
    [5, 1],
    [1, 3],
    [1, 4]
  ])
) // 1
