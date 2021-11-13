/* 环形链表 II
- 给定一个链表，返回链表开始入环的第一个节点
- 如果链表无环，则返回 null
- 可以通过判断next 如果next再次到达说明存在环
- 不允许修改给定的链表
*/

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function detectCycle(head) {
  let map = new WeakMap()
  let cur = head
  while (cur) {
    const exist = map.get(cur)
    if (exist) return exist
    map.set(cur, cur)
    cur = cur.next
  }
  return null
}

class ListNode {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}

const a = new ListNode('a')
const b = new ListNode('b')
const c = new ListNode('c')
const d = new ListNode('d')

a.next = b
b.next = a

// a.next = b
// b.next = c
// c.next = d
// d.next = b

console.log(detectCycle(a))
