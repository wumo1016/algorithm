/* 给定一个链表，判断链表中是否有环
- 如果链表中存在环，则返回 true 。 否则，返回 false
- 可以通过判断next 如果next再次到达说明存在环
*/

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  let map = new Set()
  let cur = head
  while (cur) {
    const next = cur.next
    if (map.has(next)) {
      return true
    }
    map.add(next)
    cur = next
  }
  return false
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
b.next = c
c.next = d
d.next = b

console.log(hasCycle(a));