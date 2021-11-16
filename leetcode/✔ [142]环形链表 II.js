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

// a.next = b
// b.next = a

a.next = b
b.next = c
c.next = d
d.next = b

console.log(detectCycle(a))
console.log(detectCycle1(a))

// 快慢指针
function detectCycle1(head) {
  if (!head) return head
  let slow = head
  let fast = head
  let isCycle = false
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      isCycle = true
      break
    }
  }
  if (!isCycle) {
    return null
  }
  fast = head
  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}
