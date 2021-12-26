/* 深度优先遍历
- 1.新建一个队列
- 2.把队头出队并访问
- 3.把对头的没访问的相邻节点入队
- 4.重复二三步，直到队列为空
*/

const data = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
}

const cache = new Set()

const dfs = n => {
  const queue = [n]
  cache.add(n)
  while (queue.length) {
    const f = queue.pop()
    console.log(f)
    data[f].forEach(c => {
      if (!cache.has(c)) {
        queue.unshift(c)
        cache.add(c)
      }
    })
  }
}

dfs(2)
 