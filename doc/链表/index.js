// 链表反转
function reverse(head) {
  let prev = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

function ListNode(val, next) {
  this.val = val
  this.next = next || null
}
