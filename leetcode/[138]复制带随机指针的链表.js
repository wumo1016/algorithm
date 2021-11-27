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
