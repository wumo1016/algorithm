/* 广度优先遍历
- 1.新建一个队列，把根节点入队
- 2.把对头出队并访问
- 3.把对头的children挨个入队
- 4.重复地二三步，知道队列为 
*/
const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: []
        },
        {
          val: 'e',
          children: []
        }
      ]
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: []
        },
        {
          val: 'g',
          children: []
        }
      ]
    }
  ]
}

const bfs = root => {
  const queue = [root]
  while (queue.length) {
    const f = queue.pop()
    console.log(f.val)
    f.children.forEach(child => queue.unshift(child))
  }
}

bfs(tree) // a => b => c => d > e => f > g
