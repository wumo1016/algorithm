/* 深度优先遍历
- 1.访问根节点
- 2.对根节点的没有访问过的相邻节点挨个进行深度优先遍历
*/

const data = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
}

const cache = new Set()
const dfs = n => {
  console.log(n)
  cache.add(n)
  data[n].forEach(c => {
    if (!cache.has(c)) dfs(c)
  })
}

dfs(2)
