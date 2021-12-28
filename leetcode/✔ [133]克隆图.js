/* 克隆图(https://leetcode-cn.com/problems/clone-graph/)
- 给你无向 连通 图中一个节点的引用，请你返回该图的深拷贝
- 图中的每个节点都包含它的值 val（int） 和其邻居的列表
*/

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val
  this.neighbors = neighbors === undefined ? [] : neighbors
}

/**
 * @param {Node} node
 * @return {Node}
 */
function cloneGraph(node) {
  if (!node) return node
  const map = new Map()
  const dfs = node => {
    const newNode = new Node(node.val)
    map.set(node, newNode)
    newNode.neighbors = node.neighbors.map(child => {
      return map.get(child) || dfs(child)
    })
    return newNode
  }
  return dfs(node)
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
node1.neighbors = [node2, node4]
