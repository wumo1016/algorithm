/* 环形链表
- 给定一个链表，判断链表中是否有环
- 如果链表中存在环，则返回 true 。 否则，返回 false
- 可以通过判断next 如果next再次到达说明存在环
*/

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  let set = new Set()
  let cur = head
  while (cur) {
    if (set.has(cur)) {
      return true
    }
    set.add(cur)
    cur = cur.next
  }
  return false
}

// 快慢指针
function hasCycle1(head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      return true
    }
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

console.log(hasCycle(a))
console.log(hasCycle1(a))
console.log(hasCycle2(a))
console.log(hasCycle3(a))

// 利用JSON.stringfy
function hasCycle2(head) {
  try {
    JSON.stringify(head)
  } catch {
    return true
  }
  return false
}
// 标记法
function hasCycle3(head) {
  let cur = head
  while (cur) {
    if (cur.tag) {
      return true
    }
    cur.tag = true
    cur = cur.next
  }
  return false
}
