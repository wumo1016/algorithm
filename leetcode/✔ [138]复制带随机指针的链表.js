/* 复制带随机指针的链表
- 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random 
- 该指针可以指向链表中的任何节点或空节点。
- 构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成
- 其中每个新节点的值都设为其对应的原节点的值
- 新节点的 next 指针和 random 指针也都应指向复制链表中的新节点
*/

function Node(val, next, random) {
  this.val = val
  this.next = next
  this.random = random
}

/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
  let [cur, map] = [head, new WeakMap()]
  while (cur) {
    map.set(cur, new Node(cur.val))
    cur = cur.next
  }
  cur = head
  while (cur) {
    if (cur.next) map.get(cur).next = map.get(cur.next)
    if (cur.random) map.get(cur).random = map.get(cur.random)
    cur = cur.next
  }
  return map.get(head)
}

const d = new Node('d')
const c = new Node('c', d)
const b = new Node('b', c)
const a = new Node('a', b)

c.random = a
a.random = b

copyRandomList(a)

// 递归 + 哈希
function copyRandomList(head, cachedNode = new Map()) {
  if (head === null) {
    return null
  }
  if (!cachedNode.has(head)) {
    cachedNode.set(head, { val: head.val })
    Object.assign(cachedNode.get(head), {
      next: copyRandomList(head.next, cachedNode),
      random: copyRandomList(head.random, cachedNode)
    })
  }
  return cachedNode.get(head)
}
// 迭代 + 拆分
function copyRandomList(head) {
  if (head === null) {
    return null
  }
  // 将新节点放在每一个原始节点的后面 A => A' => B => B' => C => C'
  for (let node = head; node !== null; node = node.next.next) {
    const nodeNew = new Node(node.val, node.next, null)
    node.next = nodeNew
  }
  // 将节点的random也指向新节点
  for (let node = head; node !== null; node = node.next.next) {
    const nodeNew = node.next
    nodeNew.random = node.random !== null ? node.random.next : null
  }
  // 拆分新旧链表
  const headNew = head.next
  for (let node = head; node !== null; node = node.next) {
    const nodeNew = node.next
    node.next = node.next.next
    nodeNew.next = nodeNew.next !== null ? nodeNew.next.next : null
  }
  return headNew
}
